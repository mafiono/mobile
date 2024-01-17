import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';

import AddIcon from '@mui/icons-material/Add';
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsIcon from '@mui/icons-material/Sports';
import CasinoIcon from '@mui/icons-material/Casino';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { HStack } from './Base';

import logo from '../assets/img/logo/logo.png';
import enlang from '../assets/img/feature/en.svg';
import ptlang from '../assets/img/feature/pt.svg';
import present from '../assets/img/feature/present-light.png';
import { Promotion } from '../assets/img/feature/svgIcon';

import { auth } from '../state/user/actions';


const New = () => {
  return (
    <Typography sx={{ color: 'white', fontSize: 10, px: .5, ml: .5, bgcolor: theme => theme.palette.success.dark, borderRadius: 2, border: '1px solid white' }}>New</Typography>
  )
}

const Desktop = ({ user, langList, showProfile, list, profile, active, showLang, closeLang, openProfile, closeProfile, openLogin, openRegister, go, logoutAction }) => {
  return (
    <>
      <HStack className='header_top'>
        <Stack>
          <Link className='free_link'>
            <Typography component='span' sx={{ fontSize: '11px', lineHeight: 1 }}>
              Free Money!
            </Typography>
            <Box className='money_img' />
            <EastIcon sx={{
              position: 'absolute',
              top: 0,
              right: '10px',
              bottom: 0,
              margin: 'auto',
              color: 'rgba(0,0,0,.3)',
              fontSize: '13px'
            }} />
          </Link>
        </Stack>
        <HStack>
          <Stack className='top_promotion'>
            <Stack className='top_BonusLink'>
              <Stack className='top_circle'>
                <SvgIcon
                  component={Promotion}
                  inheritViewBox
                />
              </Stack>
              <Typography sx={{ mr: 3, fontSize: 11 }}>
                Promotions and bonuses
              </Typography>
              <Box component='img' src={present} className='top_bonus_img' />
            </Stack>
          </Stack>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={showLang}
              className='lang_btn'
            >
              <Typography sx={{ fontSize: 12 }}>
                EN
              </Typography>
              <KeyboardArrowDownIcon sx={{ fontSize: '14px !important' }} />
              <Box component='img' className='lang_icon' src={enlang} />
            </Button>
            <Menu
              sx={{
                mt: (theme) => theme.spacing(3),
                [`& .MuiPopover-paper`]: {
                  bgcolor: 'white',
                  borderRadius: 2,
                },
                [`& .MuiPopover-paper ul`]: {
                  minWidth: (theme) => theme.spacing(8)
                }
              }}
              id="menu-appbar"
              anchorEl={langList}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(langList)}
              onClose={closeLang}
            >
              <MenuItem onClick={closeLang}>
                <Typography textAlign="center" sx={{ color: 'black', fontSize: (theme) => theme.spacing(1.5) }}>EN</Typography>
                <Box component='img' src={enlang} sx={{
                  width: '15px',
                  height: '15px',
                  borderRadius: 50,
                  ml: 1
                }} />
              </MenuItem>
              <MenuItem onClick={closeLang}>
                <Typography textAlign="center" sx={{ color: 'black', fontSize: (theme) => theme.spacing(1.5) }}>PT</Typography>
                <Box component='img' src={ptlang} sx={{
                  width: '15px',
                  height: '15px',
                  borderRadius: 50,
                  ml: 1
                }} />
              </MenuItem>
            </Menu>
          </Box>
        </HStack>
      </HStack>
      <HStack className='header_wraper'>
        <HStack className="header">
          <HStack>
            <HStack className="level-item" alignItems='center'>
              <Stack className="logo-container">
                <Link href='/'>
                  <Box component='img' src={logo} sx={{ maxHeight: (theme) => theme.spacing(4), ml: 2 }} />
                </Link>
              </Stack>
            </HStack>
            <Stack className="level-item">
              <Tabs
                value={active}
                onChange={(e, newValue) => go(newValue)}
                sx={{
                  ['& .MuiTabs-indicator']: {
                    backgroundImage: 'linear-gradient(103deg,#108de7 -30%,#0855c4)',
                    borderRadius: '4px 4px 0 0',
                    height: '4px'
                  }
                }}
              >
                {
                  list.map((item, idx) => (
                    <Tab
                      key={idx}
                      icon={<New />}
                      iconPosition="end"
                      label={item.name}
                      {...  { icon: idx === 3 ? <New /> : null }}
                      sx={{
                        padding: '2px',
                        mx: 2,
                        color: idx === active ? '#fff !important' : '#ffffffad',
                        minHeight: theme => theme.spacing(6),
                        minWidth: '0px !important',
                        textTransform: 'capitalize',
                        ['& .MuiTouchRipple-root']: {
                          display: 'none'
                        }
                      }} />
                  ))
                }
              </Tabs>
            </Stack>
          </HStack>
          <Stack className="level-item">
            <HStack>

              {
                user.isAuth ?
                  <>
                    <Stack sx={{ mr: 1 }}>
                      <Typography sx={{ fontSize: 10, color: '#ffffff80', textAlign: 'right' }}>Balance</Typography>
                      <Typography sx={{ fontSize: 14, fontWeight: 700, textAlign: 'right' }}>{user.balance ? Number(user.balance).toFixed(2) : 0.00}</Typography>
                    </Stack>
                    <Button className='user_btn' onClick={openProfile}>
                      <Box className='icon-wrap'>
                        <PersonIcon />
                      </Box>
                      <Box className='close-wrap'>
                        {
                          showProfile ? <CloseIcon /> : <MoreVertIcon />
                        }
                      </Box>
                    </Button>
                  </> :
                  <>
                    <Button className='login_btn' onClick={() => openLogin()}>
                      <Typography component='span'>
                        Login
                      </Typography>
                    </Button>
                    <Button className='register_btn' onClick={() => openRegister()}>
                      <Typography component='span' className='icon-wrap'>
                        <AddIcon sx={{ fontSize: '15px' }} />
                      </Typography>
                      <Typography component='span'>
                        Registeration
                      </Typography>
                    </Button>
                  </>
              }
              <Menu
                sx={{
                  mt: (theme) => theme.spacing(5),
                  [`& .MuiPopover-paper`]: {
                    bgcolor: 'white',
                    borderRadius: 2,
                  },
                  [`& .MuiPopover-paper ul`]: {
                    minWidth: (theme) => theme.spacing(8)
                  }
                }}
                id="menu-appbar"
                anchorEl={showProfile}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(showProfile)}
                onClose={closeProfile}
              >
                {
                  profile.map((item, idx) => (
                    <MenuItem key={idx} onClick={closeProfile}>
                      <Typography textAlign="center" sx={{ color: 'black', fontSize: (theme) => theme.spacing(1.5) }}>{item}</Typography>
                    </MenuItem>
                  ))
                }
                <MenuItem onClick={() => logoutAction()}>
                  <Typography textAlign="center" sx={{ color: 'black', fontSize: (theme) => theme.spacing(1.5) }}>Log Out</Typography>
                </MenuItem>
              </Menu>
            </HStack>
          </Stack>
        </HStack>
      </HStack>
    </>
  )
}

const Mobile = ({ user, langList, showProfile, list, profile, active, showLang, closeLang, openProfile, closeProfile, go, openLogin, openRegister, logoutAction }) => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (e) => {
    setDrawer(e);
  }

  return (
    <>
      <Box sx={{ borderBottom: '1px solid #141b2e', mx: -2, px: 2 }}>
        <HStack sx={{ minHeight: 60, alignItems: 'center' }}>
          <Link href='/' sx={{ display: 'flex' }}>
            <Box component='img' src={logo} sx={{ maxWidth: (theme) => theme.spacing(8.5) }} />
          </Link>
          <HStack sx={{ ml: 'auto', alignItems: 'center' }}>
            {
              user.isAuth &&
              <>
                <Stack sx={{ mr: 1 }}>
                  <Typography sx={{ color: '#94a6cdb3', fontSize: 11, lineHeight: '1.2', mb: .2, textAlign: 'right' }}>{`ID ${user.id}`}</Typography>
                  <Typography sx={{ fontSize: 14, lineHeight: 1, textAlign: 'right' }}>{user.username}</Typography>
                </Stack>
                <IconButton onClick={openProfile} sx={{ ml: 1, bgcolor: '#252f4b', borderRadius: 2, p: 0, width: 30, height: 30, boxShadow: '0 2px 14px 0 rgb(37 47 75 / 90%)', '&:hover': { bgcolor: '#141b2e', boxShadow: 'unset' } }}>
                  <PersonIcon />
                </IconButton>
                <Menu
                  sx={{
                    mt: (theme) => theme.spacing(5),
                    [`& .MuiPopover-paper`]: {
                      bgcolor: 'white',
                      borderRadius: 2,
                    },
                    [`& .MuiPopover-paper ul`]: {
                      minWidth: (theme) => theme.spacing(8)
                    }
                  }}
                  id="menu-appbar"
                  anchorEl={showProfile}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(showProfile)}
                  onClose={closeProfile}
                >
                  {
                    profile.map((item, idx) => (
                      <MenuItem key={idx} onClick={closeProfile}>
                        <Typography textAlign="center" sx={{ color: 'black', fontSize: (theme) => theme.spacing(1.5) }}>{item}</Typography>
                      </MenuItem>
                    ))
                  }
                  <MenuItem onClick={() => logoutAction()}>
                    <Typography textAlign="center" sx={{ color: 'black', fontSize: (theme) => theme.spacing(1.5) }}>Log Out</Typography>
                  </MenuItem>
                </Menu>
              </>
            }
            <IconButton sx={{ p: 0, ml: 2, }} onClick={() => toggleDrawer(true)}>
              <MenuIcon sx={{ height: 30, width: 30 }} />
            </IconButton>
          </HStack>
        </HStack>
      </Box>
      {
        !user.isAuth &&
        <HStack sx={{ py: 1 }}>
          <Button sx={{ borderRadius: 2, mr: 2, width: 'calc(50% - 16px)' }} className='btn primary' onClick={() => openLogin()}>Sign in</Button>
          <Button sx={{ borderRadius: 2, width: '50%' }} className='btn success animation' onClick={() => openRegister()}>Sign up</Button>
        </HStack>
      }
      <Drawer
        anchor='right'
        open={drawer}
        onClose={() => toggleDrawer(false)}
        className='drawer'
      >
        <Stack sx={{ width: 275 }}>
          <HStack sx={{ px: 3.75, pt: 3.75, width: '100%', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <HStack sx={{ alignItems: 'center', position: 'relative' }}>
              <IconButton onClick={openProfile} sx={{ mr: 1, bgcolor: '#4e5d86', borderRadius: 2, p: 0, width: 30, height: 30, boxShadow: '0 2px 14px 0 rgb(37 47 75 / 90%)', '&:hover': { bgcolor: '#141b2e', boxShadow: 'unset' } }}>
                <PersonIcon />
              </IconButton>
              <Button sx={{ borderRadius: 2, height: 30, }} className='btn success animation' onClick={() => openRegister()}>Sign up</Button>
            </HStack>
            <IconButton sx={{ padding: 0 }} onClick={() => toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </HStack>
          <Stack sx={{ mt: 2 }}>
            <List sx={{ padding: 0 }}>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <LiveTvIcon />
                  </ListItemIcon>
                  <ListItemText primary="Live" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SportsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sports" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CasinoIcon />
                  </ListItemIcon>
                  <ListItemText primary="Casino" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SportsEsportsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Game" />
                </ListItemButton>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Drawer>
    </>
  )
}

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isMobile = useMediaQuery('(max-width:425px)');

  const list = [{ name: 'Home', route: '/home' }, { name: 'Live', route: '/sports/live' }, { name: 'Sports', route: '/sports/prematch' }, { name: 'World Cup 22', route: '/sports/prematch' }, { name: 'Casino', route: '/casino/all' }, { name: 'Live-Casino', route: '/live-casino' }, { name: 'Poker', route: '/poker' }];
  const profile = ['Withdraw', 'Setting', 'Bet History']
  const [active, setActive] = useState(0);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [langList, setLangList] = useState(null);
  const [showProfile, setShowProfile] = useState(null);
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const showLang = (event) => {
    setLangList(event.currentTarget);
  };

  const closeLang = () => {
    setLangList(null);
  };

  const openProfile = (event) => {
    setShowProfile(event.currentTarget);
  };

  const closeProfile = () => {
    setShowProfile(null);
  };

  const openLogin = () => {
    setRegister(false);
    setLogin(true);
  }

  const closeLogin = () => {
    setLogin(false);
  }

  const openRegister = () => {
    setLogin(false);
    setRegister(true);
  }

  const closeRegister = () => {
    setRegister(false);
  }

  const go = (idx) => {
    setActive(idx);
    navigate(list[idx].route);
  }

  const loginAction = async () => {
    axios.post('/login', { username: values.username, password: values.password })
      .then(
        response => {
          let data = response.data;
          if (data) {
            dispatch(auth({ ...data, isAuth: true }));
            closeLogin();
          }
        }
      )
      .catch(error => {
        console.log("ERROR:: ", error.response.data);
      });
  }

  const logoutAction = () => {
    axios.get('logout', {});
    location.reload();
  }

  useEffect(() => {
    const path = location.pathname;
    let idx = list.findIndex((e) => e.route === path);
    if (idx > 0) {
      setActive(idx);
    } else {
      idx = list.findIndex((e) => e.route.search(`/${path.split('/')[1]}`) !== -1);
      setActive(idx);
    }
  }, [location.pathname])

  return (
    <>
      {
        isMobile ? <Mobile  {...{ user, langList, showProfile, list, profile, active, showLang, closeLang, openProfile, closeProfile, go, openLogin, openRegister, logoutAction }} /> : <Desktop {...{ user, langList, showProfile, list, profile, active, showLang, closeLang, openProfile, closeProfile, go, openLogin, openRegister, logoutAction }} />
      }
      <Modal
        open={login}
        onClose={closeLogin}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'white',
          boxShadow: 24,
          padding: 3,
          borderRadius: 4
        }}>
          <Stack>
            <HStack justifyContent='space-between' alignItems='flex-start'>
              <Stack>
                <Typography sx={{ color: '#090f1e', fontSize: '20px', fontWeight: 700 }}>Login</Typography>
                <Typography sx={{ color: '#070c19', fontSize: '12px' }}>Welcome to Seibet</Typography>
              </Stack>
              <IconButton sx={{ borderRadius: 2, bgcolor: '#edf0f7', padding: .5, '&:hover': { bgcolor: '#eeeff3' } }} onClick={() => closeLogin()}>
                <CloseIcon sx={{ color: '#a9aeb7', fontSize: 24 }} />
              </IconButton>
            </HStack>
            <Stack sx={{ my: 3 }}>
              <OutlinedInput
                type='text'
                placeholder='Username / Email'
                name='username'
                value={values.username}
                onChange={handleChange('username')}
                sx={{
                  mb: 2,
                  '& fieldset': { display: 'none' },
                  '& input': {
                    bgcolor: '#edf0f7',
                    color: '#070c19cc',
                    padding: 2,
                    borderRadius: '12px',
                    fontSize: '12px',
                    '&:-webkit-autofill': {
                      'WebkitBoxShadow': 'unset',
                      'WebkitTextFillColor': '#070c19cc',
                      borderRadius: '12px',
                    }
                  }
                }}
              />

              <OutlinedInput
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                placeholder='Password'
                name='password'
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  mb: 2,
                  bgcolor: '#edf0f7',
                  borderRadius: '12px',
                  '& fieldset': { display: 'none' },
                  '& input': {
                    color: '#070c19cc',
                    padding: 2,
                    borderRadius: '12px',
                    fontSize: '12px',
                    '&:-webkit-autofill': {
                      'WebkitBoxShadow': 'unset',
                      'WebkitTextFillColor': '#070c19cc',
                      borderRadius: '12px',
                    }
                  }
                }}
              />
              <HStack justifyContent='flex-end'>
                <Typography component='span' sx={{ color: '#6a7690a6', fontSize: 12, cursor: 'pointer' }}>Forgot password?</Typography>
              </HStack>
            </Stack>
            <Button className='btn active' sx={{ fontSize: '18px', borderRadius: '10px', mb: 2, padding: 3 }} onClick={() => loginAction()}>Login</Button>
            <HStack justifyContent='center' alignItems='center'>
              <Typography sx={{ color: '#6a7690a6', fontSize: '11px', mr: .5 }}>Still no account?</Typography>
              <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1077de', cursor: 'pointer' }} onClick={() => openRegister()}>Register</Typography>
            </HStack>
          </Stack>
        </Box>
      </Modal>
      <Modal
        open={register}
        onClose={closeRegister}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'white',
          boxShadow: 24,
          padding: 3,
          borderRadius: 4
        }}>
          <Stack>
            <HStack justifyContent='space-between' alignItems='flex-start'>
              <Stack>
                <Typography sx={{ color: '#090f1e', fontSize: '20px', fontWeight: 700 }}>Register</Typography>
                <Typography sx={{ color: '#070c19', fontSize: '12px' }}>Welcome to Seibet</Typography>
              </Stack>
              <IconButton sx={{ borderRadius: 2, bgcolor: '#edf0f7', padding: .5, '&:hover': { bgcolor: '#eeeff3' } }} onClick={() => closeRegister()}>
                <CloseIcon sx={{ color: '#a9aeb7', fontSize: 24 }} />
              </IconButton>
            </HStack>
            <Stack sx={{ my: 3 }}>
              <OutlinedInput
                type='text'
                placeholder='Username'
                name='username'
                value={values.username}
                onChange={handleChange('username')}
                sx={{
                  mb: 2,
                  '& fieldset': { display: 'none' },
                  '& input': {
                    bgcolor: '#edf0f7',
                    color: '#070c19cc',
                    padding: 2,
                    borderRadius: '12px',
                    fontSize: '12px',
                    '&:-webkit-autofill': {
                      'WebkitBoxShadow': 'unset',
                      'WebkitTextFillColor': '#070c19cc',
                      borderRadius: '12px',
                    }
                  }
                }}
              />
              <OutlinedInput
                type='text'
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={handleChange('email')}
                sx={{
                  mb: 2,
                  '& fieldset': { display: 'none' },
                  '& input': {
                    bgcolor: '#edf0f7',
                    color: '#070c19cc',
                    padding: 2,
                    borderRadius: '12px',
                    fontSize: '12px',
                    '&:-webkit-autofill': {
                      'WebkitBoxShadow': 'unset',
                      'WebkitTextFillColor': '#070c19cc',
                      borderRadius: '12px',
                    }
                  }
                }}
              />
              <OutlinedInput
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                name='password'
                placeholder='Password'
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  mb: 2,
                  bgcolor: '#edf0f7',
                  borderRadius: '12px',
                  '& fieldset': { display: 'none' },
                  '& input': {
                    color: '#070c19cc',
                    padding: 2,
                    borderRadius: '12px',
                    fontSize: '12px',
                    '&:-webkit-autofill': {
                      'WebkitBoxShadow': 'unset',
                      'WebkitTextFillColor': '#070c19cc',
                      borderRadius: '12px',
                    }
                  }
                }}
              />
              <OutlinedInput
                type={values.showPassword ? 'text' : 'password'}
                value={values.confirm}
                name='confirm'
                placeholder='Confirm Password'
                onChange={handleChange('confirm')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  mb: 2,
                  bgcolor: '#edf0f7',
                  borderRadius: '12px',
                  '& fieldset': { display: 'none' },
                  '& input': {
                    color: '#070c19cc',
                    padding: 2,
                    borderRadius: '12px',
                    fontSize: '12px',
                    '&:-webkit-autofill': {
                      'WebkitBoxShadow': 'unset',
                      'WebkitTextFillColor': '#070c19cc',
                      borderRadius: '12px',
                    }
                  }
                }}
              />
            </Stack>
            <Button className='btn success' sx={{ fontSize: '18px', borderRadius: '10px', mb: 2, padding: 3 }}>Register</Button>
            <HStack justifyContent='center' alignItems='center'>
              <Typography sx={{ color: '#6a7690a6', fontSize: '11px', mr: .5 }}>Already have an account?</Typography>
              <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1077de', cursor: 'pointer' }} onClick={() => openLogin()}>Login</Typography>
            </HStack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Header;
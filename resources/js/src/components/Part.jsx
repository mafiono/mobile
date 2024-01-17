import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import classNames from 'classnames';
import { Clock } from '../assets/img/feature/svgIcon';
import { BoxBorder, HStack, VStack } from './Base';
import { SportsList, ManageList } from '../config/sports';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 5000 }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className='bet-swiper'
    >
      <SwiperSlide><Box component='img' alt='slider' src='https://1win.pro/img/PWA_USD_en.43fbf7fc-1600.webp' /></SwiperSlide>
      <SwiperSlide><Box component='img' alt='slider' src='https://1win.pro/img/bonus_hover_1.f76a358c-1600.webp' /></SwiperSlide>
      <SwiperSlide><Box component='img' alt='slider' src='https://cdn-1win.xyz/banner-files/46gFMSTQIPqJxLalK5SGf1Qu3vBY1sRPesH8oR3qqpg9WVTmHGsLr4EVG50m6vA-Yhk3QAH7z8q80aD30ApLYjvPhvJBl8FvX1ER.png' /></SwiperSlide>
      <SwiperSlide><Box component='img' alt='slider' src='https://1win.pro/img/1winpoker_en-min.fc17484b-1600.webp' /></SwiperSlide>
    </Swiper>
  );
}

export const SportList = () => {
  return (
    <Stack className='sports-list'>
      <Box className='sports-search-wrap'>
        <Button
          startIcon={<SearchIcon />}
          className='search-btn'
        >
          <Typography component='span' sx={{ fontSize: '12px' }}>
            Search
          </Typography>

        </Button>
        <Button
          sx={{ '& .MuiButton-endIcon': { mr: 0, ml: 'auto' } }}
          startIcon={<StarIcon sx={{ color: '#ffcf47' }} />} endIcon={<Typography component='span' sx={{ fontSize: '12px !important' }}>10</Typography>}
          className='sports-list-item-btn'
        >
          <Typography component='span' sx={{ fontSize: '12px' }}>
            Favourite
          </Typography>
        </Button>
      </Box>
      <Box className='sports-list-body'>
        <Box className='list-item'>
          <Box className='item-btn-wrap'>
            <Button
              sx={{ '& .MuiButton-endIcon': { mr: 0, ml: 'auto' } }}
              startIcon={<i className={classNames("sports-icon", `icon-soccer`, "no-margin")}></i>}
              endIcon={<Typography component='span' sx={{ fontSize: '12px !important' }}>10</Typography>}
              className='sports-list-item-btn'
            >
              <Typography component='span' sx={{ fontSize: '12px' }}>
                Soccer
              </Typography>
            </Button>
          </Box>
          <Box className='section-list'>
            <Box className='section-header'>
              Country
            </Box>
            <Box className='list-item' sx={{ position: 'relative' }}>
              <Button
                sx={{ '& .MuiButton-endIcon': { mr: 0, ml: 'auto' } }}
                startIcon={<Box component='img' src="https://assets.betsapi.com/v2/images/flags/eu.svg" sx={{ width: '18px', height: '18px' }} />}
                endIcon={<Typography component='span' sx={{ fontSize: '12px !important' }}>10</Typography>}
                className='sports-list-item-btn'
              >
                <Typography component='span' sx={{ fontSize: '12px' }}>
                  Chian
                </Typography>
              </Button>
              <Box className='section-list'>
                <Box className='section-header'>
                  Tournament
                </Box>
                <Box className='list-item' sx={{ position: 'relative' }}>
                  <Button
                    sx={{ '& .MuiButton-endIcon': { mr: 0, ml: 'auto' } }}
                    startIcon={<StarIcon size='sm' sx={{ color: '#ffcf47' }} />}
                    endIcon={<Typography component='span' sx={{ fontSize: '12px !important' }}>10</Typography>}
                    className='sports-list-item-btn'
                  >
                    <Typography component='span' sx={{ fontSize: '12px' }}>
                      Match name
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  )
}

export const Tournament = () => {
  return (
    <Table className="tournament-table">
      <TableHead className="table-header">
        <TableRow className="table-row">
          <TableCell className="tournament-cell">
            <HStack className="tournament-cell-inner">
              <i className="sports-icon icon-basketball"></i>
              <Typography sx={{ fontSize: '12px', fontWeight: 500, ml: 1 }}>UEFA Youth League</Typography>
            </HStack>
          </TableCell>
          <TableCell className="odd-cell-h">1</TableCell>
          <TableCell className="odd-cell-h">X</TableCell>
          <TableCell className="odd-cell-h">2</TableCell>
          <TableCell className="odd-cell-h">HDP</TableCell>
          <TableCell className="odd-cell-h">1</TableCell>
          <TableCell className="odd-cell-h">2</TableCell>
          <TableCell className="odd-cell-h">HDP</TableCell>
          <TableCell className="odd-cell-h">Over</TableCell>
          <TableCell className="odd-cell-h">Under</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="table-body">
        <Match />
        <Match />
      </TableBody>
    </Table>
  )
}

export const Match = () => {
  return (
    <TableRow className="match-row">
      <TableCell>
        <HStack className="match-info">
          <IconButton sx={{ mr: .5 }}>
            <StarIcon className='favourite' />
          </IconButton>
          <Box>
            <Typography className='match-date'>03 sep</Typography>
            <Typography className='match-date'>03:30</Typography>
          </Box>
          <Box className="match-separator" />
          <HStack className="match-teams-container">
            <HStack className="match-teams-block">
              <Box className="match-teams">
                <HStack className="team">
                  <Typography className="team-name">
                    Borussia Dortmund
                  </Typography>
                </HStack>
                <HStack className="team">
                  <Typography className="team-name">
                    TSG 1899 Hoffenheim
                  </Typography>
                </HStack>
              </Box>
            </HStack>
          </HStack>
          <HStack className="ml-auto">
            <Box className="match-statistics">
              <Typography className="match-statistics-line">
                <Typography component='span' className="match-score-total">1:0</Typography>
                <Typography component='span' className="match-score-periods">(1:0)</Typography>
              </Typography>
              <Typography className="match-statistics-line">
                <Clock />
                <Typography component='span' className="match-time-passed">45'</Typography>
              </Typography>
            </Box>
          </HStack>
        </HStack>
      </TableCell>
      <TableCell className="odd-cell">
        <Button className="odd-coefficient">40.87</Button>
      </TableCell>
      <TableCell className="odd-cell">
        <Button className="odd-coefficient">40.87</Button>
      </TableCell>
      <TableCell className="odd-cell">
        <Button className="odd-coefficient">40.87</Button>
      </TableCell>
      <TableCell className="odd-cell">
        <Button className="odd-coefficient">40.87</Button>
      </TableCell>
      <TableCell className="odd-cell">
        <Button className="odd-coefficient">40.87</Button>
      </TableCell>
      <TableCell className="odd-cell">
        <Button className="odd-coefficient">40.87</Button>
      </TableCell>
      <TableCell className="odd-cell">
        <Button className="odd-coefficient">40.87</Button>
      </TableCell>
      <TableCell className="odd-cell">
        <Button className="odd-coefficient">40.87</Button>
      </TableCell>
      <TableCell className="odd-cell">
        <Button className="odd-coefficient">40.87</Button>
      </TableCell>
    </TableRow>
  )
}

export const Event = () => {
  const [active, setActive] = useState(true);
  return (
    <Stack sx={{ overflow: 'hidden' }}>
      <Box>
        <Stack className='event-content'>
          <HStack justifyContent='space-between' sx={{ mb: 2 }}>
            <Box sx={{ pt: 2.5, pl: 2.5 }}>
              <HStack sx={{ mb: 1 }} alignItems='center'>
                <Typography varient='h2' sx={{ mr: 2, fontSize: 30, fontWeight: 900 }}>0 : 0</Typography>
                <Typography sx={{ margin: 'auto', mr: 2, py: .75, px: 2, borderRadius: 4, bgcolor: '#97aee11c' }}>2 half 47 '</Typography>
                <IconButton>
                  <StarIcon />
                </IconButton>
              </HStack>
              <Typography sx={{ fontSize: 12, color: '#ffffff80' }}>07 Sep, Wed</Typography>
              <Stack sx={{ my: 2 }}>
                <Typography sx={{ fontSize: 15 }}>Home Team</Typography>
                <Typography sx={{ fontSize: 15 }}>Away Team</Typography>
              </Stack>
              <Stack>
                <HStack>
                  <Typography sx={{ fontSize: 12, color: '#ffffff80', mr: 1 }}>Soccer</Typography>
                  <i className={classNames("sports-icon", `icon-soccer`)}></i>
                </HStack>
                <HStack>
                  <Typography sx={{ fontSize: 12, color: '#ffffff80' }}>England Reserve Matches</Typography>
                </HStack>
              </Stack>
            </Box>
          </HStack>
          <Stack sx={{ bgcolor: '#141b2e', borderRadius: 2 }}>
            <HStack justifyContent='space-between' alignItems='center' sx={{ padding: 2 }}>
              <Button className='btn'>All</Button>
              <IconButton className='btn'>
                <KeyboardDoubleArrowDownIcon />
              </IconButton>
            </HStack>
            <Box sx={{ padding: 2 }}>
              <Grid container spacing={2}>
                {
                  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((ite, idx) => (
                    <Grid item xs={6} key={idx}>
                      <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
                        <HStack className='market-head'>
                          <Typography sx={{ fontSize: '12px' }}>
                            1X2
                          </Typography>
                          <IconButton onClick={() => setActive(!active)}>
                            {
                              active ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                            }
                          </IconButton>
                        </HStack>
                        <Collapse in={active} timeout="auto" unmountOnExit>
                          <Box className='market-body'>
                            <Box className='market-wrap'>
                              <Button className='market-btn'>
                                <Typography className='market-name'>
                                  1X2
                                </Typography>
                                <Typography className='market-odd'>
                                  2.57
                                </Typography>
                              </Button>
                            </Box>
                            <Box className='market-wrap'>
                              <Button className='market-btn'>
                                <Typography className='market-name'>
                                  1X2
                                </Typography>
                                <Typography className='market-odd'>
                                  2.57
                                </Typography>
                              </Button>
                            </Box>
                            <Box className='market-wrap'>
                              <Button className='market-btn'>
                                <Typography className='market-name'>
                                  1X2
                                </Typography>
                                <Typography className='market-odd'>
                                  2.57
                                </Typography>
                              </Button>
                            </Box>
                            <Box className='market-wrap'>
                              <Button className='market-btn'>
                                <Typography className='market-name'>
                                  1X2
                                </Typography>
                                <Typography className='market-odd'>
                                  2.57
                                </Typography>
                              </Button>
                            </Box>
                            <Box className='market-wrap'>
                              <Button className='market-btn'>
                                <Typography className='market-name'>
                                  1X2
                                </Typography>
                                <Typography className='market-odd'>
                                  2.57
                                </Typography>
                              </Button>
                            </Box>
                          </Box>
                        </Collapse>
                      </Box>
                    </Grid>
                  ))
                }
              </Grid>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export const SportHead = (props) => {
  const { sportId, dateList, today, qutright, favourite, live, league } = props;

  return (
    <Box sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' p={2} >
        {(() => {
          if (!sportId || !SportsList[sportId]) {
            return (
              <HStack>
                <SportsSoccerIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
                <Typography
                  variant='h5'
                  noWrap
                  component='h5'
                  ml={1}
                >
                  Sports
                </Typography>
              </HStack>
            )
          } else {
            return (<HStack>
              {SportsList[sportId].icon(6)}
              <Typography
                variant='h5'
                noWrap
                component='h5'
                ml={1}
              >
                {SportsList[sportId].name}
              </Typography>
            </HStack>)
          }
        })()}
        <Stack direction='row' alignItems='center' >
          {
            favourite && (
              <Typography noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.error.dark, [`&:hover`]: { color: (theme) => theme.palette.error.light } }}>
                Favourite Events
              </Typography>
            )
          }
          {
            live && (
              <Typography noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.error.dark, [`&:hover`]: { color: (theme) => theme.palette.error.light } }}>
                Back to Live
              </Typography>
            )
          }
          {
            league && (
              <Typography noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.error.dark, [`&:hover`]: { color: (theme) => theme.palette.error.light } }}>
                Back to League
              </Typography>
            )
          }
          {
            dateList && ['01', '02', '03'].map((item, idx) => (
              <Typography key={idx} noWrap sx={{ pl: 1, cursor: 'pointer', color: (theme) => theme.palette.success.main, [`&:hover`]: { color: (theme) => theme.palette.success.light } }}>
                {`${item}/08`}
              </Typography>
            ))
          }
          {
            today && (
              <Typography noWrap
                sx={{
                  pl: 1,
                  cursor: 'pointer',
                  color: (theme) => theme.palette.success.light,
                  [`&:hover`]: {
                    color: (theme) => theme.palette.success.light
                  }
                }}
              >
                Today
              </Typography>
            )
          }
        </Stack>
      </Stack>
      {
        qutright && (
          <Typography noWrap
            sx={{
              p: 0.5,
              cursor: 'pointer',
              textAlign: 'center',
              bgcolor: (theme) => theme.palette.error.main
            }}
          >
            Outright(40)
          </Typography>)
      }
    </Box>
  )
}

export const SportBody = () => {
  return (
    <Grid container sx={{ bgcolor: '#21242ac9', padding: 1 }}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((idx) => (
          <Grow in={true} key={idx} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 50 }}>
            <Grid item md={4} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: '1px solid #4a4d56', [`&:hover`]: { bgcolor: (theme) => theme.palette.background.paper, color: (theme) => theme.palette.error.light } }}>
              <Box component='img' alt='slider' src={`https://images.50bet.net/images/flags/England.png`} sx={{ mx: 1 }} />
              <Typography noWrap sx={{ fontSize: (theme) => theme.spacing(1.6) }}>
                England Premier
              </Typography>
            </Grid>
          </Grow>
        ))
      }
    </Grid>
  )
}

const Result = () => {
  return (
    <Button sx={{ color: '#ffffff', borderRight: '1px solid #3d454c', borderRadius: 0, width: 'calc(100% / 3)', justifyContent: 'center', height: '100%', px: (theme) => theme.spacing(0.5) }}>
      {/* <KeyboardArrowUpIcon sx={{ fontSize: (theme) => theme.spacing(1.75) }} /> */}
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5), display: 'flex', alignItems: 'center' }}>
        2.54
      </Typography>
    </Button>
  )
}

const Handicup = () => {
  return (
    <Button sx={{ color: '#ffffff', borderRight: '1px solid #3d454c', borderRadius: 0, width: 'calc(100% / 3)', justifyContent: 'space-between', height: '100%', px: (theme) => theme.spacing(0.5) }}>
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5), display: 'flex', alignItems: 'center' }}>
        {/* <KeyboardArrowUpIcon sx={{ fontSize: (theme) => theme.spacing(1.75) }} /> */}
        +2
      </Typography>
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5) }}>
        2.54
      </Typography>
    </Button>
  )
}

const OverUpder = () => {
  return (
    <Button sx={{ color: '#ffffff', borderRadius: 0, width: 'calc(100% / 3)', justifyContent: 'space-between', height: '100%', px: (theme) => theme.spacing(0.5) }}>
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5), display: 'flex', alignItems: 'center' }}>
        {/* <KeyboardArrowUpIcon sx={{ fontSize: (theme) => theme.spacing(1.75) }} /> */}
        O 1.5
      </Typography>
      <Typography component='span' sx={{ fontSize: (theme) => theme.spacing(1.5) }}>
        2.54
      </Typography>
    </Button>
  )
}

export const SportLeague = () => {
  const matchs = [0, 1, 2];
  return (
    <Stack>
      <HStack sx={{
        justifyContent: 'flex-start',
        bgcolor: (theme) => theme.palette.secondary.dark,
        px: 2,
        py: 1,
        borderTop: '1px solid #3d454c'
      }}
      >
        <Box component='img' alt='slider' src={`https://images.50bet.net/images/flags/England.png`} />
        <Typography sx={{ pl: 1 }}>GERMANY BUNDESLIGA</Typography>
      </HStack>
      <HStack sx={{
        bgcolor: (theme) => theme.palette.secondary.dark,
        color: (theme) => theme.palette.error.light,
        fontSize: (theme) => theme.spacing(1.5),
        borderTop: '1px solid #3d454c',
        width: '100%',
        height: (theme) => theme.spacing(7.6)
      }}>
        <VStack sx={{ height: '100%', width: (theme) => theme.spacing(10), borderRight: '1px solid #3d454c' }}>
          Time
        </VStack>
        <VStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 )', borderRight: '1px solid #3d454c' }}>
          Event
        </VStack>
        <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 * 2)' }}>
          <VStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
            <VStack sx={{ height: '50%', width: '100%' }}>Full Time</VStack>
            <HStack sx={{ height: '50%', width: '100%', borderTop: '1px solid #3d454c' }}>
              <HStack sx={{ height: '100%', width: 'calc(100% / 3)', borderRight: '1px solid #3d454c' }}>
                1X2
              </HStack>
              <HStack sx={{ height: '100%', width: 'calc(100% / 3)', borderRight: '1px solid #3d454c' }}>
                HDP
              </HStack>
              <HStack sx={{ height: '100%', width: 'calc(100% / 3)', }}>
                OU
              </HStack>
            </HStack>
          </VStack>
          <VStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
            <VStack sx={{ height: '50%', width: '100%' }}>Full Time</VStack>
            <HStack sx={{ height: '50%', width: '100%', borderTop: '1px solid #3d454c' }}>
              <VStack sx={{ height: '100%', width: 'calc(100% / 3)', borderRight: '1px solid #3d454c' }}>
                1X2
              </VStack>
              <VStack sx={{ height: '100%', width: 'calc(100% / 3)', borderRight: '1px solid #3d454c' }}>
                HDP
              </VStack>
              <VStack sx={{ height: '100%', width: 'calc(100% / 3)', }}>
                OU
              </VStack>
            </HStack>
          </VStack>
        </HStack>
        <VStack sx={{ width: 30 }}>M</VStack>
      </HStack>


      <Stack sx={{ bgcolor: (theme) => theme.palette.background.default }}>
        {
          matchs.map((idx) => (
            <SportMatch key={idx} idx={idx} />
          ))
        }
      </Stack>

    </Stack>
  )
}

export const SportMatch = (props) => {
  const { idx } = props
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 200 }}>
      <VStack>
        <HStack sx={{
          fontSize: (theme) => theme.spacing(1.5),
          borderTop: '1px solid #3d454c',
          width: '100%',
          justifyContent: 'flex-start',
          height: (theme) => theme.spacing(5)
        }}>
          <VStack sx={{ height: '100%', width: (theme) => theme.spacing(10), borderRight: '1px solid #3d454c' }}>
            <IconButton>
              <StarBorderIcon />
            </IconButton>
          </VStack>
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3)', borderRight: '1px solid #3d454c', justifyContent: 'flex-start' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>1</Typography>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>Real Espana</Typography>
          </HStack>
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 * 2)' }}>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
          </HStack>
          <HStack />
        </HStack>

        <HStack sx={{
          fontSize: (theme) => theme.spacing(1.5),
          width: '100%',
          justifyContent: 'flex-start',
          height: (theme) => theme.spacing(5)
        }}>
          <VStack sx={{ height: '100%', width: (theme) => theme.spacing(10), borderRight: '1px solid #3d454c' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>58'</Typography>
          </VStack>
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3)', borderRight: '1px solid #3d454c', justifyContent: 'flex-start' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>0</Typography>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>Atletico Vega Real</Typography>
          </HStack>
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 * 2)' }}>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
          </HStack>
          <VStack>
            <IconButton sx={{ fontSize: (theme) => theme.spacing(1.5), width: 30 }}>+10</IconButton>
          </VStack>
        </HStack>

        <HStack sx={{
          fontSize: (theme) => theme.spacing(1.5),
          width: '100%',
          justifyContent: 'flex-start',
          height: (theme) => theme.spacing(5)
        }}>
          <VStack sx={{ height: '100%', width: (theme) => theme.spacing(10), borderRight: '1px solid #3d454c' }}>
          </VStack>
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3)', borderRight: '1px solid #3d454c', justifyContent: 'flex-start' }}>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>&nbsp;&nbsp;</Typography>
            <Typography sx={{ px: 1, fontSize: (theme) => theme.spacing(1.5) }}>Draw</Typography>
          </HStack>
          <HStack sx={{ height: '100%', width: 'calc((100% - 110px) / 3 * 2)' }}>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
            <HStack sx={{ height: '100%', width: '50%', borderRight: '1px solid #3d454c' }}>
              <Result />
              <Handicup />
              <OverUpder />
            </HStack>
          </HStack>
          <VStack />
        </HStack>
      </VStack >
    </Grow>
  )
}

export const SportEvent = () => {
  return (
    <>
      {
        [1, 2, 3, 4, 5].map((idx) => (
          <SportEventMarket key={idx} {...{ idx }} />
        ))
      }
    </>
  )
}

export const SportEventMarket = (props) => {
  const { idx } = props;
  const [active, setActive] = useState(true);
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 200 }}>
      <Box>
        <HStack sx={{
          justifyContent: 'space-between',
          bgcolor: (theme) => theme.palette.secondary.dark,
          borderColor: (theme) => theme.palette.secondary.main,
          borderWidth: '1px',
          borderStyle: 'solid none none none',
          px: 2.5,
        }}
        >
          <Typography sx={{ fontSize: (theme) => theme.spacing(1.75) }}>
            1X2
          </Typography>
          <IconButton onClick={() => setActive(!active)}>
            {
              active ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
          </IconButton>
        </HStack>
        <Collapse in={active} timeout="auto" unmountOnExit>
          <Box sx={{ bgcolor: '#21242ac9', py: 1, display: 'flex', flexWrap: 'wrap' }}>
            {
              [1, 2, 3, 4, 5].map((idx) => (
                <Grow in={true} key={idx} style={{ transformOrigin: '0 0 0' }} {...{ timeout: idx * 200 }}>
                  <BoxBorder sx={{ margin: 1, flexGrow: 1, width: 'calc(100% / 4)' }}>
                    <Button sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: (theme) => theme.spacing(0.5) }}>
                      <Typography sx={{ fontSize: (theme) => theme.spacing(1.5), color: '#ffffff' }}>
                        Eintracht Frankfurt / Draw
                      </Typography>
                      <Typography sx={{ color: (theme) => theme.palette.success.main, fontSize: (theme) => theme.spacing(1.5) }}>
                        2.57
                      </Typography>
                    </Button>
                  </BoxBorder>
                </Grow>
              ))
            }
          </Box>
        </Collapse>
      </Box>
    </Grow>
  )
}

export const LiveList = () => {
  const list = ['soccer', 'volleyball', 'bascketball', 'tennis', 'table tennis', 'ice hockey']
  const [active, setActive] = useState(0);
  return (
    <HStack sx={{ justifyContent: 'flex-start' }}>
      {
        list.map((item, idx) => (
          <BoxBorder key={idx}
            sx={{
              bgcolor: (theme) => theme.palette.background.paper,
              borderBottom: active === idx ? '0px' : 'none',
              top: active === idx ? '3px' : 0,
              transition: 'top 0.3s',
              position: 'relative',
              mr: 1
            }}
          >
            <Button
              onClick={() => setActive(idx)}
              sx={{
                px: 2,
                width: '100%',
                borderRadius: 0,
                color: active === idx ? (theme) => theme.palette.success.main : '#ffffff',
                borderColor: active === idx ? (theme) => theme.palette.background.paper : (theme) => theme.palette.secondary.light,
                [`&:hover`]: {
                  color: (theme) => theme.palette.success.main,
                }
              }}
            >
              {item}
            </Button>
          </BoxBorder>
        ))
      }
    </HStack >
  )
}

export const ManageHead = (props) => {
  const { title, idx } = props;

  return (
    <Box sx={{ bgcolor: (theme) => theme.palette.background.paper }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' p={2} >
        <HStack>
          {
            (() => {
              if (idx !== undefined) {
                return ManageList[idx].icon
              } else {
                return (
                  <ListAltIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
                )
              }
            })()
          }
          <Typography
            variant='h5'
            noWrap
            component='h5'
            ml={1}
          >
            {title ? title : 'Manage Title'}
          </Typography>
        </HStack>
      </Stack>
    </Box>
  )
}

export const AdminManageList = (props) => {
  const { setTitle } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(0);

  const clickHandl = (item, idx) => {
    navigate(item.url);
    setActive(idx);
    setTitle({ name: item.name, idx });
  }

  useEffect(() => {
    const path = location.pathname.split('/');
    const idx = ManageList.findIndex(a => a.url === path[path.length - 1])
    if (idx > -1) {
      setActive(idx);
      setTitle({ name: ManageList[idx].name, idx });
    } else {
      setActive(0);
      setTitle({ name: 'Users', idx: 0 });
    }
  }, [setTitle, location]);

  return (
    <HStack sx={{ justifyContent: 'flex-start' }}>
      {
        ManageList.map((item, idx) => (
          <BoxBorder key={idx}
            sx={{
              mr: 1,
              position: 'relative',
              transition: 'top 0.3s',
              top: active === idx ? '3px' : 0,
              borderBottom: active === idx ? '0px' : 'none',
              bgcolor: (theme) => theme.palette.background.paper,
            }}
          >
            <Button
              onClick={() => clickHandl(item, idx)}
              sx={{
                px: 2,
                width: '100%',
                borderRadius: 0,
                color: active === idx ? (theme) => theme.palette.success.main : '#ffffff',
                borderColor: active === idx ? (theme) => theme.palette.background.paper : (theme) => theme.palette.secondary.light,
                [`&:hover`]: {
                  color: (theme) => theme.palette.success.main,
                }
              }}
            >
              {item.name}
            </Button>
          </BoxBorder>
        ))
      }
    </HStack >
  )
}
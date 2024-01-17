import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HelpIcon from '@mui/icons-material/Help';
import PublishIcon from '@mui/icons-material/Publish';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import classNames from 'classnames';

import { HStack } from './Base';
import {
    Slip,
    UEFA, UFC, WTA, FIBA, NNL, ATP, ITF, FIFA,
    Visa, Master, GooglePay, ApplePay, BitCoin, Qiwi, Ether, Tether, Skrill, Paytm, Payneer, Cos, FK, WebMoney, MuchBetter, JCB, Discover, Interace, AstroPay,
} from "../assets/img/feature/svgIcon";

import logo from '../assets/img/logo/logo.png';
import win10 from '../assets/img/feature/win10.svg';
import ios from '../assets/img/feature/ios.svg';
import android from '../assets/img/feature/android.svg';
import enlang from '../assets/img/feature/en.svg';
import ptlang from '../assets/img/feature/pt.svg';
import casinoMentor from '../assets/img/feature/casino-mentor.png';
import miglioriCasinoOnline from '../assets/img/feature/migliori-casino-online.png';
import bestBitcoinCasino from '../assets/img/feature/best-bitcoin-casino.png';
import casinosAnalyzer from '../assets/img/feature/casinos-analyzer.png';
import cricketBettingWali from '../assets/img/feature/cricket-betting-wali.png';
import br from '../assets/img/feature/br.svg';
import verifiedSeibet from '../assets/img/feature/verified-seibet.png';
import home from '../assets/img/feature/home.svg';
import live from '../assets/img/feature/live.svg';
import casino from '../assets/img/feature/casino.svg';
import games from '../assets/img/feature/games.svg';

const Desktop = ({ langList, showLang, closeLang }) => {
    return (
        <Box className='footer' sx={{ py: 4 }}>
            <HStack sx={{ mb: 6, alignItems: 'center' }}>
                <Box component='img' src={logo} sx={{ height: 20 }} />
                <Box sx={{ ml: 3 }} className='footer-line' />
            </HStack>
            <HStack>
                <HStack sx={{ maxWidth: '846px' }}>
                    <Stack sx={{ width: 140 }}>
                        <Typography sx={{ fontSize: 12, lineHeight: '14px', fontWeight: 600 }}>Support 24/7</Typography>
                        <Typography sx={{ fontSize: 10, lineHeight: 1, color: '#34405e', my: .5 }}>Write to us if You still have any questions!</Typography>
                        <HStack sx={{ mt: 2 }} alignItems="center">
                            <IconButton className="contact-btn">
                                <MarkChatUnreadIcon sx={{ fontSize: '14px' }} />
                            </IconButton>
                            <Link href="" sx={{ textDecoration: "none", color: '#fff', fontSize: 12, ml: 1.5 }}>contact@seibet.com</Link>
                        </HStack>
                    </Stack>
                    <HStack sx={{ ml: 9 }}>
                        <Stack>
                            <Typography sx={{ fontSize: 12, lineHeight: 1, color: '#34405e', mb: 2, textTransform: 'uppercase' }}>Information</Typography>
                            <Typography sx={{ fontSize: 12, mt: 1.25 }}>Rules</Typography>
                            <Typography sx={{ fontSize: 12, mt: 1.25 }}>Bonuses and promotions</Typography>
                        </Stack>
                        <Stack sx={{ ml: 9 }}>
                            <Typography sx={{ fontSize: 12, lineHeight: 1, color: '#34405e', mb: 2, textTransform: 'uppercase' }}>Categories</Typography>
                            <HStack >
                                <Stack>
                                    <Typography sx={{ fontSize: 12, mt: 1.25 }}>Live</Typography>
                                    <Typography sx={{ fontSize: 12, mt: 1.25 }}>Sports</Typography>
                                    <Typography sx={{ fontSize: 12, mt: 1.25 }}>Promotions</Typography>
                                    <Typography sx={{ fontSize: 12, mt: 1.25 }}>Live-Games</Typography>
                                    <Typography sx={{ fontSize: 12, mt: 1.25 }}>Poker</Typography>
                                </Stack>
                                <Stack sx={{ ml: 9 }}>
                                    <Typography sx={{ fontSize: 12, mt: 1.25 }}>Casino</Typography>
                                </Stack>
                            </HStack>
                        </Stack>
                    </HStack>
                </HStack>
                <HStack sx={{ mt: 'auto', ml: 'auto' }}>
                    <Stack sx={{ mr: 1.25, justifyContent: 'space-between', flexDirection: { md: 'column', xs: 'row' } }}>
                        <Button className='app-download' sx={{ display: 'flex' }}>
                            <HStack alignItems='center'>
                                <Box component='img' src={ios} sx={{ height: '25px' }} />
                                <Stack sx={{ ml: 1, textTransform: 'capitalize', textAlign: 'start', color: 'white' }}>
                                    <Typography sx={{ fontSize: 8, lineHeight: '10px', color: 'hsla(0,0%,100%,.5)' }}>Application</Typography>
                                    <Typography sx={{ fontWeight: 600, fontSize: 10 }}>for IOS</Typography>
                                </Stack>
                            </HStack>
                            <HelpIcon sx={{ height: 16, opacity: .45 }} />
                        </Button>
                        <Button className='app-download' sx={{ display: 'flex' }}>
                            <HStack alignItems='center'>
                                <Box component='img' src={android} sx={{ height: '25px' }} />
                                <Stack sx={{ ml: 1, textTransform: 'capitalize', textAlign: 'start', color: 'white' }}>
                                    <Typography sx={{ fontSize: 8, lineHeight: '10px', color: 'hsla(0,0%,100%,.5)' }}>Application</Typography>
                                    <Typography sx={{ fontWeight: 600, fontSize: 10 }}>for Android</Typography>
                                </Stack>
                            </HStack>
                            <HelpIcon sx={{ height: 16, opacity: .45 }} />
                        </Button>
                    </Stack>
                    <Button sx={{ display: { md: 'flex', xs: 'none' }, flexDirection: 'column', padding: 1.25, border: '1px solid hsla(0,0%,100%,.15)', height: '94px', width: '94px', borderRadius: '12px', justifyContent: 'space-between', cursor: 'pointer' }}>
                        <HStack alignItems='center' justifyContent='space-between' sx={{ width: '100%' }}>
                            <Box component='img' src={win10} sx={{ height: '25px' }} />
                            <ChevronRightIcon sx={{ height: 16, opacity: .45 }} />
                        </HStack>
                        <Stack sx={{ textTransform: 'capitalize', textAlign: 'start', color: 'white' }}>
                            <Typography sx={{ fontSize: 8, lineHeight: '10px', color: 'hsla(0,0%,100%,.5)' }}>Application</Typography>
                            <Typography sx={{ fontWeight: 600, fontSize: 10 }}>for Windows</Typography>
                        </Stack>
                    </Button>
                </HStack>
            </HStack>
            <Box sx={{ mt: 5, mb: 3 }} className='footer-line' />
            <HStack alignItems='center'>
                <HStack alignItems='center'>
                    <IconButton className='social_link' sx={{ mr: 1.25 }}>
                        <Link src="#">
                            <TelegramIcon />
                        </Link>
                    </IconButton>
                    <IconButton className='social_link' sx={{ mr: 1.25 }}>
                        <Link src="#">
                            <InstagramIcon />
                        </Link>
                    </IconButton>
                    <IconButton className='social_link' sx={{ mr: 1.25 }}>
                        <Link src="#">
                            <FacebookIcon />
                        </Link>
                    </IconButton>
                    <IconButton className='social_link'>
                        <Link src="#">
                            <TwitterIcon />
                        </Link>
                    </IconButton>
                </HStack>
                <HStack className='payments'>
                    <UEFA />
                    <UFC />
                    <WTA />
                    <FIBA />
                    <NNL />
                    <ATP />
                    <ITF />
                    <FIFA />
                </HStack>
                <HStack>
                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            onClick={showLang}
                            className='footer-btn'
                        >
                            <Typography sx={{ fontSize: 12, color: '#fff', fontWeight: 700 }}>
                                EN
                            </Typography>
                            <Box component='img' sx={{ ml: 1.25, width: 22 }} src={enlang} />
                        </Button>
                        <Menu
                            sx={{
                                mb: (theme) => theme.spacing(6),
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
                                vertical: 'bottom',
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
                    <IconButton className='footer-btn' sx={{ ml: 1.25 }}>
                        <PublishIcon />
                    </IconButton>
                </HStack>

            </HStack>
            <Box sx={{ my: 3 }} className='footer-line-full' />
            <HStack alignItems='center' justifyContent='space-between'>
                <Visa />
                <Master />
                <GooglePay />
                <ApplePay />
                <BitCoin />
                <Qiwi />
                <Ether />
                <Tether />
                <Skrill />
                <Paytm />
                <Payneer />
                <Cos />
                <FK />
                <WebMoney />
                <MuchBetter />
                <JCB />
                <Discover />
                <Interace />
                <AstroPay />
            </HStack>
            <Box sx={{ my: 3 }} className='footer-line-full' />
            <HStack>
                <Box>
                    <Typography component='span' sx={{ fontSize: '9px', fontWeight: 400, color: '#34405e', flex: 'auto' }}>© 2022 Seibet. </Typography>
                    <Typography component='span' sx={{ fontSize: '9px', fontWeight: 400, color: '#34405e', flex: 'auto' }}>1win.pro operated by 1WIN N.V. which is registered at Dr. H. Fergusonweg 1, Curaçao, with company number 147039, and having gaming license 8048/JAZ2018-040 and all rights to operate the gaming software. MFI INVESTMENTS LIMITED, a company, whose registered office is at 3, Chytron Street, Flat/Office 301, P.C. 1075 Nicosia, Cyprus with company number HE386738.EU company MFI Investments Ltd is providing payment services as an agent according to the license agreement concluded between MFI INVESTMENTS LIMITED and 1WIN N.V.</Typography>
                </Box>
                <HStack sx={{ ml: 9 }}>
                    <HStack alignItems='center'>
                        <HStack>
                            <Link>
                                <Box component='img' src={casinoMentor} sx={{ height: '25px' }} />
                            </Link>
                            <Box className='split' />
                        </HStack>
                        <HStack>
                            <Link>
                                <Box component='img' src={miglioriCasinoOnline} sx={{ height: '25px' }} />
                            </Link>
                            <Box className='split' />
                        </HStack>
                        <HStack>
                            <Link>
                                <Box component='img' src={bestBitcoinCasino} sx={{ height: '25px' }} />
                            </Link>
                            <Box className='split' />
                        </HStack>
                        <HStack>
                            <Link>
                                <Box component='img' src={casinosAnalyzer} sx={{ height: '25px' }} />
                            </Link>
                            <Box className='split' />
                        </HStack>
                        <HStack>
                            <Link>
                                <Box component='img' src={cricketBettingWali} sx={{ height: '25px' }} />
                            </Link>
                            <Box className='split' />
                        </HStack>
                        <HStack alignItems='center'>
                            <Link>
                                <Box component='img' src={br} sx={{ height: '39px' }} />
                            </Link>
                            <Box className='split' />
                        </HStack>
                        <HStack alignItems='center' sx={{ textDecoration: "none", color: '#34405e', fontSize: 16, fontWeight: 800 }}>
                            <Link>
                                <Box component='img' src={verifiedSeibet} sx={{ height: '39px' }} />
                            </Link>
                            18+
                        </HStack>
                    </HStack>
                </HStack>
            </HStack>
        </Box>
    );
};

const Mobile = ({ langList, showLang, closeLang }) => {
    const page = { 0: '/home', 1: '/sports/live', 3: '/casino/all', 4: '/casino/all' }
    const navigate = useNavigate();
    const [activBtn, setActivBtn] = useState(0);

    const goPage = (e) => {
        setActivBtn(e);
        if (page[e]) {
            navigate(page[e]);
        }
    }
    return (
        <>
            <Box className='footer' sx={{ py: 2, mb: 10 }}>
                <HStack sx={{ mb: 6, alignItems: 'center' }}>
                    <Box component='img' src={logo} sx={{ height: 20 }} />
                    <Box sx={{ ml: 3 }} className='footer-line' />
                </HStack>
                <HStack sx={{ position: 'relative' }}>
                    <IconButton sx={{ ml: 1, bgcolor: '#252f4b', borderRadius: 2, p: 0, width: 24, height: 24, position: 'absolute', bottom: '10px', right: 0, '&:hover': { bgcolor: '#252f4b' } }}>
                        <ExpandLessIcon sx={{ fontSize: '16px' }} />
                    </IconButton>
                    <Table sx={{ width: 'auto' }}>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ p: 0, border: 'unset' }}>
                                    <Typography sx={{ color: '#5c72a380', pb: 1.25, lineHeight: 1.3, fontSize: 10, textTransform: 'uppercase' }}>Information</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ p: 0, border: 'unset' }}>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Rules</Typography>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Bonuses and promotions</Typography>
                                </TableCell>
                                <TableCell sx={{ p: 0, pl: 3, border: 'unset' }}>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Affiliate Program</Typography>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Risk Disclosure</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ p: 0, border: 'unset' }}>
                                    <Typography sx={{ color: '#5c72a380', pb: 1.25, lineHeight: 1.3, fontSize: 10, textTransform: 'uppercase' }}>Categories</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ p: 0, border: 'unset' }}>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Live</Typography>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Sports</Typography>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Promotions</Typography>
                                </TableCell>
                                <TableCell sx={{ p: 0, pl: 3, border: 'unset' }}>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Live-games</Typography>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Pocker</Typography>
                                    <Typography sx={{ pb: 1.25, fontWeight: 600, linHeight: 1.3, fontSize: 10 }}>Casino</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </HStack>
                <Box sx={{ my: 2 }} className='footer-line-full' />
                <HStack>
                    <Stack sx={{ width: '100%', justifyContent: 'space-between', flexDirection: { md: 'column', xs: 'row' } }}>
                        <Button className='app-download' sx={{ display: 'flex', width: 'calc(50% - 8px) !important' }}>
                            <HStack alignItems='center'>
                                <Box component='img' src={ios} sx={{ height: '25px' }} />
                                <Stack sx={{ ml: 1, textTransform: 'capitalize', textAlign: 'start', color: 'white' }}>
                                    <Typography sx={{ fontSize: 8, lineHeight: '10px', color: 'hsla(0,0%,100%,.5)' }}>Application</Typography>
                                    <Typography sx={{ fontWeight: 600, fontSize: 10 }}>for IOS</Typography>
                                </Stack>
                            </HStack>
                            <HelpIcon sx={{ height: 16, opacity: .45 }} />
                        </Button>
                        <Button className='app-download' sx={{ display: 'flex', width: 'calc(50% - 8px) !important' }}>
                            <HStack alignItems='center'>
                                <Box component='img' src={android} sx={{ height: '25px' }} />
                                <Stack sx={{ ml: 1, textTransform: 'capitalize', textAlign: 'start', color: 'white' }}>
                                    <Typography sx={{ fontSize: 8, lineHeight: '10px', color: 'hsla(0,0%,100%,.5)' }}>Application</Typography>
                                    <Typography sx={{ fontWeight: 600, fontSize: 10 }}>for Android</Typography>
                                </Stack>
                            </HStack>
                            <HelpIcon sx={{ height: 16, opacity: .45 }} />
                        </Button>
                    </Stack>
                </HStack>
                <HStack sx={{ mt: 2, p: 1.25, borderRadius: 3, alignItems: 'center', background: 'linear-gradient(107.15deg,#1e283f,#141b2e99)' }}>
                    <Stack>
                        <Typography sx={{ fontSize: 10, lineHeight: 1.3, fontWeight: 600 }}>Support 24/7</Typography>
                        <Typography sx={{ fontSize: 8, lineHeight: 1.3, mt: .1 }}>Write to us if you still have any questions!</Typography>
                    </Stack>
                    <Button className='btn active' sx={{ borderRadius: 50, height: 25, width: 75, ml: 'auto' }}>Chat</Button>
                </HStack>
                <HStack sx={{ mt: 2, justifyContent: 'space-around' }}>
                    <UEFA />
                    <UFC />
                    <WTA />
                    <FIBA />
                    <NNL />
                    <ATP />
                </HStack>
                <Box sx={{ my: 2 }} className='footer-line-full' />
                <HStack alignItems='center'>
                    <IconButton className='social_link' sx={{ mr: 1.25, width: 'calc(100% / 4 - 10px) !important' }}>
                        <Link href="#" >
                            <TelegramIcon />
                        </Link>
                    </IconButton>
                    <IconButton className='social_link' sx={{ mr: 1.25, width: 'calc(100% / 4 - 10px) !important' }}>
                        <Link href="#">
                            <InstagramIcon />
                        </Link>
                    </IconButton>
                    <IconButton className='social_link' sx={{ mr: 1.25, width: 'calc(100% / 4 - 10px) !important' }}>
                        <Link href="#">
                            <FacebookIcon />
                        </Link>
                    </IconButton>
                    <IconButton className='social_link' sx={{ width: 'calc(100% / 4 - 10px) !important' }}>
                        <Link href="#">
                            <TwitterIcon />
                        </Link>
                    </IconButton>
                </HStack>
                <Box sx={{ my: 2 }} className='footer-line-full' />
                <HStack sx={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', mx: -2 }} >
                    <Visa />
                    <Master />
                    <GooglePay />
                    <ApplePay />
                    <BitCoin />
                    <Qiwi />
                    <Ether />
                    <Tether />
                    <Skrill />
                    <Paytm />
                    <Payneer />
                    <Cos />
                    <FK />
                    <WebMoney />
                    <MuchBetter />
                    <JCB />
                    <Discover />
                    <Interace />
                    <AstroPay />
                </HStack>
                <Box sx={{ my: 2 }} className='footer-line-full' />
                <HStack alignItems='center' justifyContent="space-between">
                    <HStack alignItems='center' justifyContent="center">
                        <Stack alignItems='center' justifyContent="center" sx={{
                            mr: 1.25, height: '22px', width: '15px', position: 'relative', '&:before': {
                                content: `""`, position: 'absolute', minWidth: '1px', background: 'hsla(0,0%,100%,.1)', top: '5px', bottom: '5px', right: '-5px'
                            }
                        }}>
                            <Box component='img' src={verifiedSeibet} sx={{ width: '15px', height: '22px' }} />
                        </Stack>
                        <HStack sx={{ flexWrap: 'wrap', maxWidth: '156px' }}>
                            <HStack alignItems='center' sx={{
                                mr: '5px', position: 'relative',
                                '&:before': {
                                    content: `""`, position: 'absolute', minWidth: '1px', background: 'hsla(0,0%,100%,.1)', top: '5px', bottom: '10px', right: '-5px'
                                }
                            }}>
                                <Link>
                                    <Box component='img' src={br} sx={{ height: '23px', width: '23px' }} />
                                </Link>
                            </HStack>
                            <HStack sx={{ mx: '5px', my: '2px' }}>
                                <Link>
                                    <Box component='img' src={casinoMentor} sx={{ height: '18px' }} />
                                </Link>
                            </HStack>
                            <HStack sx={{ mx: '5px', my: '2px' }}>
                                <Link>
                                    <Box component='img' src={miglioriCasinoOnline} sx={{ height: '18px' }} />
                                </Link>
                            </HStack>
                            <HStack sx={{ mx: '5px', my: '2px' }}>
                                <Link>
                                    <Box component='img' src={bestBitcoinCasino} sx={{ height: '18px' }} />
                                </Link>
                            </HStack>
                            <HStack>
                                <Link>
                                    <Box component='img' src={casinosAnalyzer} sx={{ height: '18px' }} />
                                </Link>
                            </HStack>
                            <HStack sx={{ mx: '5px', my: '2px' }}>
                                <Link>
                                    <Box component='img' src={cricketBettingWali} sx={{ height: '18px' }} />
                                </Link>
                            </HStack>
                            <HStack sx={{ mx: '5px', my: '2px' }}>
                                <Typography sx={{
                                    fontWeight: 800, fontSize: '14px', lineHeight: '16px', color: 'rgba(119,130,155,.4)', marginLeft: '5px'
                                }}>+18</Typography>
                            </HStack>
                        </HStack>
                    </HStack>
                    <HStack alignItems='center'>
                        <Box sx={{ flexGrow: 0 }}>
                            <Button
                                onClick={showLang}
                                className='footer-btn'
                            >
                                <Typography sx={{ fontSize: 12, color: '#fff', fontWeight: 700 }}>
                                    EN
                                </Typography>
                                <Box component='img' sx={{ ml: 1.25, width: 22 }} src={enlang} />
                            </Button>
                            <Menu
                                sx={{
                                    mb: (theme) => theme.spacing(6),
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
                                    vertical: 'bottom',
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
                        <IconButton className='footer-btn' sx={{ ml: 1.25 }}>
                            <PublishIcon />
                        </IconButton>
                    </HStack>
                </HStack>
                <Box>
                    <Typography component='span' sx={{ fontSize: '9px', fontWeight: 400, color: '#34405e', flex: 'auto' }}>© 2022 Seibet. </Typography>
                    <Typography component='span' sx={{ fontSize: '9px', fontWeight: 400, color: '#34405e', flex: 'auto' }}>1win.pro operated by 1WIN N.V. which is registered at Dr. H. Fergusonweg 1, Curaçao, with company number 147039, and having gaming license 8048/JAZ2018-040 and all rights to operate the gaming software. MFI INVESTMENTS LIMITED, a company, whose registered office is at 3, Chytron Street, Flat/Office 301, P.C. 1075 Nicosia, Cyprus with company number HE386738.EU company MFI Investments Ltd is providing payment services as an agent according to the license agreement concluded between MFI INVESTMENTS LIMITED and 1WIN N.V.</Typography>
                </Box>
            </Box >
            <Box
                sx={{
                    bgcolor: '#090f1e',
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 600
                }}>
                <HStack className='mobileMenu'>
                    <Button className={classNames('mobileMenu-btn', { 'active': activBtn === 0 })} onClick={() => goPage(0)}>
                        <Box component='img' src={home} />
                        <Typography>Main</Typography>
                    </Button>
                    <Button className={classNames('mobileMenu-btn', { 'active': activBtn === 1 })} onClick={() => goPage(1)}>
                        <Box component='img' src={live} />
                        <Typography>Live</Typography>
                    </Button>
                    <Button className={classNames('mobileMenu-btn', { 'active': activBtn === 2 })} onClick={() => goPage(2)}>
                        <Stack sx={{ bgcolor: activBtn === 2 ? '#fff' : '#0854c3', boxShadow: activBtn === 2 ? '0 1px 10px 0 #84878f' : '0 1px 10px 0 #083f92', width: 43, height: 43, alignItems: 'center', justifyContent: 'center', borderRadius: 50, color: activBtn === 2 ? '#0854c3' : 'white' }}>
                            <Slip />
                        </Stack>
                    </Button>
                    <Button className={classNames('mobileMenu-btn', { 'active': activBtn === 3 })} onClick={() => goPage(3)}>
                        <Box component='img' src={casino} />
                        <Typography>Casino</Typography>
                    </Button>
                    <Button className={classNames('mobileMenu-btn', { 'active': activBtn === 4 })} onClick={() => goPage(4)}>
                        <Box component='img' src={games} />
                        <Typography>Live-Game</Typography>
                    </Button>
                </HStack>
            </Box>
        </>
    )
}

const Footer = () => {
    const [langList, setLangList] = useState(null);

    const showLang = (event) => {
        setLangList(event.currentTarget);
    };

    const closeLang = () => {
        setLangList(null);
    };

    const isMobile = useMediaQuery('(max-width:425px)');

    return (
        isMobile ? <Mobile {...{ langList, showLang, closeLang }} /> : <Desktop {...{ langList, showLang, closeLang }} />
    )
}

export default Footer;
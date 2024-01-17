import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';

import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const SportsList = {
    //    main  
    1: {
        name: 'Soccer',
        icon: (size = 6) => <SportsSoccerIcon sx={{ fontSize: (theme) => theme.spacing(size) }} color='error' />
    },
    13: {
        name: 'Tennis',
        icon: (size = 6) => <SportsTennisIcon sx={{ fontSize: (theme) => theme.spacing(size) }} color='error' />
    },
    17: {
        name: 'Ice Hockey',
        icon: (size = 6) => <SportsHockeyIcon sx={{ fontSize: (theme) => theme.spacing(size) }} color='error' />
    },
    18: {
        name: 'Basketball',
        icon: (size = 6) => <SportsBasketballIcon sx={{ fontSize: (theme) => theme.spacing(size) }} color='error' />
    },
    92: {
        name: 'Table Tennis',
        icon: (size = 6) => <SportsTennisIcon sx={{ fontSize: (theme) => theme.spacing(size) }} color='error' />
    },
    91: {
        name: 'Volleyball',
        icon: (size = 6) => <SportsVolleyballIcon sx={{ fontSize: (theme) => theme.spacing(size) }} color='error' />
    },
    //  others
    2: {
        name: 'Horse Racing',
        icon: (size = 6) => <SportsVolleyballIcon sx={{ fontSize: (theme) => theme.spacing(size) }} color='error' />
    },
    3: 'Cricket',
    4: 'Greyhounds',
    8: 'Rugby Union',
    9: 'Boxing/UFC',
    12: 'American Football',
    14: 'Snooker',
    15: 'Darts',
    16: 'Baseball',
    19: 'Rugby League',
    36: 'Australian Rules',
    66: 'Bowls',
    75: 'Gaelic Sports',
    78: 'Handball',
    83: 'Futsal',
    90: 'Floorball',
    94: 'Badminton',
    95: 'Beach Volleyball',
    107: 'Squash',
    110: 'Water Polo',
    151: 'E-sports',
};

export const ManageList = [
    {
        name: 'Users',
        url: 'users',
        icon: <PeopleOutlineIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    {
        name: 'Bet List',
        url: 'bet-list',
        icon: <ListAltIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    {
        name: 'Transaction',
        url: 'transaction',
        icon: <ReceiptLongIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    {
        name: 'Create Account',
        url: 'create-account',
        icon: <PersonAddAltIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    {
        name: 'Setting',
        url: 'setting',
        icon: <SettingsOutlinedIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    }
]
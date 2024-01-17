import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import TableCell from '@mui/material/TableCell';
import OutlinedInput from '@mui/material/OutlinedInput';

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const BoxBorder = styled(Box)(({ theme }) => ({
  // borderWidth: theme.spacing(0.4),
  borderStyle: 'solid',
  borderColor: theme.palette.secondary.main
}))

export const HStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
}))

export const VStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
}))

export const LayoutWrap = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 68px - 48px)',
  padding: theme.spacing(4, 0),
  // backgroundImage: `url(${require('../assets/img/background/back.jpg')})`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}))

export const FullLayoutWrap = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  // backgroundImage: `url(${require('../assets/img/background/login.png')})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  opacity: 0.6
}))

export const OutInput = styled(OutlinedInput)(({ theme }) => ({
  width: theme.spacing(20),
  [`& .MuiSelect-select`]: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(0.75),
    paddingBottom: theme.spacing(0.75),
  },
  [`fieldset`]: {
    borderColor: `${theme.palette.secondary.main} !important`,
    borderRadius: 0,
    borderWidth: theme.spacing(0.25),
    borderStyle: 'solid',
  }
}));

export const TblCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(0.5),
  overflow: 'hidden',
  // height: theme.spacing(0.5),
  borderRight: '1px solid rgba(81, 81, 81, 1)'
}))

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#13233c,#13233c 28%,transparent 32%)',
    content: '""',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

export const BpRadio = (props) => {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
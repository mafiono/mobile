import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import DeleteIcon from '@mui/icons-material/Delete';

import { HStack, BpRadio } from './Base';

import classNames from 'classnames';

const BetSlip = () => {
  const [type, setType] = useState('Single');
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box className='betslip'>
      <HStack className='bet-tabbar'>
        <Box className='slip-title'>
          BETSLIP
          <Typography component='span' className='slip-count'>1</Typography>
        </Box>
      </HStack>
      <Box>
        <RadioGroup value={type} onChange={handleChange} sx={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', px: 1, mb: 1 }}>
          <FormControlLabel value="Single" control={<BpRadio sx={{ padding: 0, mr: 1 }} />} label="Ordinary" sx={{ '& .MuiFormControlLabel-label': { margin: 0, fontWeight: 700, fontSize: "12px" } }} />
          <FormControlLabel value="Multi" control={<BpRadio sx={{ padding: 0, mr: 1 }} />} label="Express" sx={{ '& .MuiFormControlLabel-label': { margin: 0, fontWeight: 700, fontSize: "12px" } }} />
        </RadioGroup>
        <Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ py: 1.25, mb: 1, bgcolor: '#fff', borderRadius: 2 }}>
              <HStack sx={{ mb: 1, px: 1.25, alignItems: 'center' }}>
                <Button className='slip-Odd'>1.25</Button>
                <Typography sx={{ color: '#096dff', fontSize: '11px', fontWeight: '700' }}>1X2, W1</Typography>
                <IconButton className='close-odd'>
                  <DeleteIcon sx={{ fontSize: '16px' }} />
                </IconButton>
              </HStack>
              <HStack className='sliip-teams'>
                <Box>
                  <Typography sx={{ color: '#000', fontWeight: 600, fontSize: '13px' }}>Home team</Typography>
                  <Typography sx={{ color: '#000', fontWeight: 600, fontSize: '13px' }}>Away team</Typography>
                </Box>
              </HStack>
              <HStack sx={{ px: 1.25 }} justifyContent='space-between' alignItems='center'>
                <HStack>
                  <i className={classNames("sports-icon", `icon-soccer`, "betslip-icon")}></i>
                  <Typography component='span' sx={{ color: '#94a6cd', fontWeight: 500, fontSize: '11px', lineHeight: 1.2, pl: 1 }}>
                    Tournament
                  </Typography>
                </HStack>
                <HStack className='live-mark'>
                  <Box className='live-dot' />
                  <Typography component='span' sx={{ fontSize: '12px' }}>LIVE</Typography>
                </HStack>
              </HStack>
            </Box>
            <HStack justifyContent='flex-end'>
              <Stack>
                <Typography sx={{ color: '#0dc35d', pb: .25, fontWeight: 600, textAlign: 'right', fontSize: '12px' }}>Possible profit</Typography>
                <Typography sx={{ color: '#0dc35d', pb: .5, fontWeight: 600, textAlign: 'right', fontSize: '12px' }}>0.00 USD</Typography>
              </Stack>
            </HStack>
            <Box>
              <TextField variant="outlined" className='enter-stake' placeholder='Bet amount' type='number' />
            </Box>
          </Box>

          <Box sx={{ mb: 1 }}>
            <Box className='express-slip'>
              <HStack sx={{ pb: 1, mx: 1.25, alignItems: 'center', pt: 1.25, bgcolor: 'white' }}>
                <Button className='slip-Odd'>1.25</Button>
                <Typography sx={{ color: '#096dff', fontSize: '11px', fontWeight: '700' }}>1X2, W1</Typography>
                <IconButton className='close-odd'>
                  <DeleteIcon sx={{ fontSize: '16px' }} />
                </IconButton>
              </HStack>
              <HStack className='sliip-teams' sx={{ bgcolor: 'white' }}>
                <Box>
                  <Typography sx={{ color: '#000', fontWeight: 600, fontSize: '13px' }}>Home team</Typography>
                  <Typography sx={{ color: '#000', fontWeight: 600, fontSize: '13px' }}>Away team</Typography>
                </Box>
              </HStack>
              <HStack sx={{ mx: 1.25, pb: 1.25, bgcolor: 'white' }} justifyContent='space-between' alignItems='center'>
                <HStack>
                  <i className={classNames("sports-icon", `icon-soccer`, "betslip-icon")}></i>
                  <Typography component='span' sx={{ color: '#94a6cd', fontWeight: 500, fontSize: '11px', lineHeight: 1.2, pl: 1 }}>
                    Tournament
                  </Typography>
                </HStack>
                <HStack className='live-mark'>
                  <Box className='live-dot' />
                  <Typography component='span' sx={{ fontSize: '12px' }}>LIVE</Typography>
                </HStack>
              </HStack>
            </Box>
            <Box className='express-slip'>
              <HStack sx={{ pb: 1, mx: 1.25, alignItems: 'center', pt: 1.25, bgcolor: 'white' }}>
                <Button className='slip-Odd'>1.25</Button>
                <Typography sx={{ color: '#096dff', fontSize: '11px', fontWeight: '700' }}>1X2, W1</Typography>
                <IconButton className='close-odd'>
                  <DeleteIcon sx={{ fontSize: '16px' }} />
                </IconButton>
              </HStack>
              <HStack className='sliip-teams' sx={{ bgcolor: 'white' }}>
                <Box>
                  <Typography sx={{ color: '#000', fontWeight: 600, fontSize: '13px' }}>Home team</Typography>
                  <Typography sx={{ color: '#000', fontWeight: 600, fontSize: '13px' }}>Away team</Typography>
                </Box>
              </HStack>
              <HStack sx={{ mx: 1.25, pb: 1.25, bgcolor: 'white' }} justifyContent='space-between' alignItems='center'>
                <HStack>
                  <i className={classNames("sports-icon", `icon-soccer`, "betslip-icon")}></i>
                  <Typography component='span' sx={{ color: '#94a6cd', fontWeight: 500, fontSize: '11px', lineHeight: 1.2, pl: 1 }}>
                    Tournament
                  </Typography>
                </HStack>
                <HStack className='live-mark'>
                  <Box className='live-dot' />
                  <Typography component='span' sx={{ fontSize: '12px' }}>LIVE</Typography>
                </HStack>
              </HStack>
            </Box>
            <Box className='express-slip'>
              <HStack sx={{ pb: 1, mx: 1.25, alignItems: 'center', pt: 1.25, bgcolor: 'white' }}>
                <Button className='slip-Odd'>1.25</Button>
                <Typography sx={{ color: '#096dff', fontSize: '11px', fontWeight: '700' }}>1X2, W1</Typography>
                <IconButton className='close-odd'>
                  <DeleteIcon sx={{ fontSize: '16px' }} />
                </IconButton>
              </HStack>
              <HStack className='sliip-teams' sx={{ bgcolor: 'white' }}>
                <Box>
                  <Typography sx={{ color: '#000', fontWeight: 600, fontSize: '13px' }}>Home team</Typography>
                  <Typography sx={{ color: '#000', fontWeight: 600, fontSize: '13px' }}>Away team</Typography>
                </Box>
              </HStack>
              <HStack sx={{ mx: 1.25, pb: 1.25, bgcolor: 'white' }} justifyContent='space-between' alignItems='center'>
                <HStack>
                  <i className={classNames("sports-icon", `icon-soccer`, "betslip-icon")}></i>
                  <Typography component='span' sx={{ color: '#94a6cd', fontWeight: 500, fontSize: '11px', lineHeight: 1.2, pl: 1 }}>
                    Tournament
                  </Typography>
                </HStack>
                <HStack className='live-mark'>
                  <Box className='live-dot' />
                  <Typography component='span' sx={{ fontSize: '12px' }}>LIVE</Typography>
                </HStack>
              </HStack>
            </Box>
            <Box className='total-odd'>
              <Button className='btn'>
                123 Total Coefficient
              </Button>
            </Box>
            <HStack justifyContent='flex-end'>
              <Stack>
                <Typography sx={{ color: '#0dc35d', pb: .25, fontWeight: 600, textAlign: 'right', fontSize: '12px' }}>Possible profit</Typography>
                <Typography sx={{ color: '#0dc35d', pb: .5, fontWeight: 600, textAlign: 'right', fontSize: '12px' }}>0.00 USD</Typography>
              </Stack>
            </HStack>
            <Box>
              <TextField variant="outlined" className='enter-stake' placeholder='Bet amount' type='number' />
            </Box>
          </Box>
        </Box>
        <Box>
          <HStack sx={{ mb: 1, alignItems: 'center' }}>
            <Button sx={{ height: '28px', borderRadius: 2, ml: 'auto', bgcolor: '#79ccf929' }}>
              <DeleteIcon sx={{ fontSize: '20px' }} />
              <Typography sx={{ fontSize: '14px', ml: 1, textTransform: 'capitalize' }}>Clear All</Typography>
            </Button    >
          </HStack>
          <Button sx={{ borderRadius: 2, width: '100%', color: '#090f1e', bgcolor: '#ffe036', boxShadow: '0 2px 24px 0 #ffca094d', fontWeight: 700, '&:hover': { bgcolor: '#ffe036' } }}>
            Make Bet
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default BetSlip;
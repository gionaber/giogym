import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='10px' alignItems='center' px='40px' pt='12px'>
        <img src={Logo} alt='logo' width='50px' height='40px' />
        <Typography variant='h5' pb='40px'>
          Gio's Gym
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

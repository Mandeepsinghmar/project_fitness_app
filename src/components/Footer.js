import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ justifyContent: { lg: 'space-between', xs: 'center' }, flexDirection: { lg: 'row', xs: 'column' }, alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
      <Stack
        direction="row"
        gap="13px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"

      >
        <Stack justifyContent="center" alignItems="center" sx={{ background: '#fff', width: '40px', height: '40px', borderRadius: '50%' }}>
          <FacebookRoundedIcon sx={{ color: '#FF2625' }} />
        </Stack>
        <Stack justifyContent="center" alignItems="center" sx={{ background: '#FF2625', width: '40px', height: '40px', borderRadius: '50%' }}>
          <TwitterIcon sx={{ color: '#fff' }} />
        </Stack>
        <Stack justifyContent="center" alignItems="center" sx={{ background: '#fff', width: '40px', height: '40px', borderRadius: '50%' }}>
          <LinkedInIcon sx={{ color: '#FF2625' }} />
        </Stack>
        <Stack justifyContent="center" alignItems="center" sx={{ background: '#fff', width: '40px', height: '40px', borderRadius: '50%' }}>
          <GoogleIcon sx={{ color: '#FF2625' }} />
        </Stack>
      </Stack>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by JavaScript Mastery</Typography>
  </Box>
);

export default Footer;

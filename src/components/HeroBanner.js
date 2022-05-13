import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">_ Fitness Club</Typography>
    <Typography fontWeight={700} fontSize="44px" mb="23px" mt="60px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      A gym is a club, building, or large room,usually <br />
      containing special equipment, where people go to
    </Typography>
    <Stack mt="61px" direction="row" gap="29px" mb="66px">
      <Button sx={{ background: '#FF2625', width: '200px', height: '58px', fontSize: '22px', fontFamily: 'Alegreya', textTransform: 'none', color: 'white' }}>Join Now</Button>
      <Button sx={{ border: '1px solid #FF2625', width: '200px', height: '58px', fontSize: '22px', fontFamily: 'Alegreya', textTransform: 'none', color: '#000' }}>Know More</Button>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;

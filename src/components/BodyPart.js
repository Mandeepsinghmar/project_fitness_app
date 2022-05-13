import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    gap="47px"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: { lg: '270px', xs: '320px' }, height: '282px', cursor: 'pointer' } : { background: '#fff', borderBottomLeftRadius: '20px', width: { lg: '270px', xs: '320px' }, height: '282px', cursor: 'pointer' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({
        top: 2000,
        left: 100,
        behavior: 'smooth',
      });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;

import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  return (
    <Stack gap="61px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack gap="35px">
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br />
          exercises to target your {target}. It will help you improve your{' '}
          <br />
          mood and gain energy.
        </Typography>
        <Stack direction="row" gap="24px" alignItems="center">
          <Button
            sx={{
              background: '#FFF2DB',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
            }}
          >
            <img
              src={BodyPartImage}
              alt={bodyPart}
              style={{ width: '50px', height: '50px' }}
            />
          </Button>
          <Typography textTransform="capitalize" fontSize="30px">
            {bodyPart}
          </Typography>
        </Stack>
        <Stack direction="row" gap="24px" alignItems="center">
          <Button
            sx={{
              background: '#FFF2DB',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
            }}
          >
            <img
              src={TargetImage}
              alt={target}
              style={{ width: '50px', height: '50px' }}
            />
          </Button>
          <Typography textTransform="capitalize" fontSize="30px">
            {target}
          </Typography>
        </Stack>
        <Stack direction="row" gap="24px" alignItems="center">
          <Button
            sx={{
              background: '#FFF2DB',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
            }}
          >
            <img
              src={EquipmentImage}
              alt={equipment}
              style={{ width: '50px', height: '50px' }}
            />
          </Button>
          <Typography textTransform="capitalize" fontSize="30px">
            {equipment}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;

import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalSrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const OtherExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '60px' } }} p="20px">
    <Typography variant="h5" sx={{ fontSize: { lg: '44px' } }} fontWeight={700} color="#000" mb="33px">
      Other <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" spacing={3} sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalSrollbar data={targetMuscleExercises} marginLeft="105px" />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '44px' } }} fontWeight={700} color="#000" mb="33px" mt="100px">
      Other <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" spacing={3} sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalSrollbar data={equipmentExercises} marginLeft="105px" />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default OtherExercises;

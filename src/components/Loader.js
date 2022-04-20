import React from 'react';
import { Box } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Box className="loader">
    <InfinitySpin color="grey" />
  </Box>
);

export default Loader;

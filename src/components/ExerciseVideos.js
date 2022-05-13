import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => (
  <Box mt="50px" sx={{ marginTop: { lg: '203px' } }} p="20px">
    <Typography variant="h5" sx={{ fontSize: { lg: '44px' } }} fontWeight={700} color="#000" mb="33px">
      Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
    </Typography>
    <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '40px' } }} justifyContent="center">
      {exerciseVideos.length !== 0 ? (
        exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '387px', height: '381px', textDecoration: 'none' }}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: '20px', width: '387px', height: '381px' }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '20px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>

          </a>
        ))
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default ExerciseVideos;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link
    style={{
      width: '371px',
      height: '445px',
      background: '#fff',
      borderTop: '4px solid #FF2625',
      borderBottomLeftRadius: '20px',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      paddingBottom: '10px',
    }}
    to={`/exercise/${exercise.id}`}
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      style={{ width: '371px', height: '326px' }}
    />
    <Stack direction="row">
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#FFA9A9',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
          hover: { color: '#000' },
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#FCC757',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.target}
      </Button>

    </Stack>

    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      fontSize="24px"
      mt="11px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;

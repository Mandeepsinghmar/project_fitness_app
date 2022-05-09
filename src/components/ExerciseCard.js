import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link
    className="exercise-card"
    key={exercise.id}
    to={`/exercise/${exercise.id}`}
  >
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Typography>{exercise.name}</Typography>
  </Link>
);

export default ExerciseCard;

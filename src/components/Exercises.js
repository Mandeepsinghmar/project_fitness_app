import React from 'react';
import { Link } from 'react-router-dom';
import randomColor from 'randomcolor';
import { Typography } from '@mui/material';

const Exercises = ({ exercises }) => (
  <>
    {
                exercises.map((exercise) => (
                  <Link className="exercise-card" style={{ backgroundColor: randomColor() }} key={exercise.id} to={`/exercise/${exercise.id}`}>
                    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                    <Typography>{exercise.name}</Typography>
                  </Link>
                ))
            }
  </>
);

export default Exercises;

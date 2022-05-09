import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material//ChevronRight';
import randomColor from 'randomcolor';
import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button type="button" onClick={() => scrollPrev()} className="arrow">
      <ChevronLeftIcon />
    </button>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button type="button" onClick={() => scrollNext()} className="arrow">
      <ChevronRightIcon />
    </button>
  );
}
const HorizontalSrollbar = ({ data }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>

    {data.map((exercise) => (
      <Box
        key={exercise.id}
        itemId={exercise.id}
        title={exercise.name}
        className="detail-exercise-card"
        ml="10px"
      >
        <ExerciseCard exercise={exercise} />
      </Box>
    ))}

  </ScrollMenu>
);
export default HorizontalSrollbar;

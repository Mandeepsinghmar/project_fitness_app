import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  // fetch exercises Data
  useEffect(() => {
    const fetchExercisesData = async () => {
      if (bodyPart === 'all') {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        setExercises(exercisesData);
      } else {
        const bodyPartsExercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        setExercises(bodyPartsExercises);
      }
    };
    fetchExercisesData();
  }, [bodyPart]);

  // Pagination

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise,
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };
  return (
    <Box sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px' } }} fontSize="20px" mb="46px">Showing Results</Typography>

      <Stack direction="row" gap="107px" flexWrap="wrap" justifyContent="center">
        {
            currentExercises.length > 0 ? (
              currentExercises.map((exercise, idx) => (
                <ExerciseCard key={idx} exercise={exercise} />
              ))
            ) : (
              <Loader />
            )
             }
      </Stack>
      <Stack mt="114px" alignItems="center">
        {
           exercises.length > 9 && (
           <Pagination
             color="standard"
             shape="rounded"
             defaultPage={1}
             count={Math.ceil(exercises.length / exercisesPerPage)}
             page={currentPage}
             onChange={paginate}
             size="large"
           />
           )
}
      </Stack>
    </Box>

  );
};

export default Exercises;


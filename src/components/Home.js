import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Home = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10);

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

  // search

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
    <Box className="exercises-wrapper">
      <Box className="exercises-container">
        {
                        currentExercises.length > 0 ? (
                          <>
                            {
                        currentExercises.map((exercise, idx) => (
                          <ExerciseCard key={idx} exercise={exercise} />
                        ))
                      }
                          </>

                        ) : (
                          <Loader />
                        )
                    }
      </Box>
      <Box sx={{ mt: 6, mb: 10 }}>
        {
                        exercises.length > 9 && (
                        <Pagination color="secondary" defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} />
                        )
                    }
      </Box>
    </Box>
  );
};

export default Home;

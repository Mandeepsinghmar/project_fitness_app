import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Button, TextField, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SearchIcon from '@mui/icons-material/Search';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import Exercises from './Exercises';
import Loader from './Loader';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(8);
  const [search, setSearch] = useState('');

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
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(bodyPartsData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  // search

  const handleSearch = async () => {
    if (search) {
      setSearch('');
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
      );
      setExercises(searchedExercises);
    }
  };

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
    <Box className="container">
      <Box className="navbar">
        <Typography variant="h5" fontWeight={700} fontSize="25px" mb={3} color="white" fontFamily="pacifico">
          Fitness <FitnessCenterIcon style={{ color: '#EA8757', fontSize: '35px' }} /> Club
        </Typography>
        <Box>
          <TextField
            className="search"
            sx={{ input: { color: 'white', fontWeight: '700' } }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="search"
            type="text"
          />
          <Button onClick={handleSearch} sx={{ background: '#E0E0E0', height: '56px', ml: '-5px', borderRadius: '4px' }}>
            <SearchIcon style={{ fontSize: '35px', color: 'rgb(228, 125, 87)' }} />
          </Button>
        </Box>
        <Box>
          <Box className="body-parts-container">
            {
                            bodyParts.length > 0 && (
                            <Button type="button" style={bodyPart === 'all' ? { backgroundColor: '#E0E0E0', color: 'rgb(228, 125, 87)' } : { backgroundColor: 'rgb(228, 125, 87)' }} onClick={() => setBodyPart('all')}>All</Button>
                            )
                        }
            {
                            bodyParts?.map((item) => (
                              <Box key={item}>
                                <Button type="button" style={item === bodyPart ? { backgroundColor: '#E0E0E0', color: 'rgb(228, 125, 87)' } : { backgroundColor: 'rgb(228, 125, 87)' }} onClick={() => setBodyPart(item)}>{item}</Button>
                              </Box>
                            ))
                        }
          </Box>
        </Box>
      </Box>
      <Box className="exercises-wrapper">
        <Box className="exercises-container">
          {
                        currentExercises.length !== 0 ? (
                          <Exercises exercises={currentExercises} />

                        ) : (
                          <Loader />
                        )
                    }
        </Box>
        <Box sx={{ mt: 8, mb: 10 }}>
          {
                        exercises.length > 9 && (
                        <Pagination defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} />
                        )
                    }
        </Box>
      </Box>

    </Box>
  );
};

export default Home;

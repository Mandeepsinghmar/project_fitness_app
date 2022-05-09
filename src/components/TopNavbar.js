import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SearchIcon from '@mui/icons-material/Search';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const TopNavbar = ({ setExercises }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if (search) {
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
  return (
    <Box className="navbar">
      <Typography variant="h5" fontWeight={700} fontSize="25px" mb={3} fontFamily="pacifico">
        Fitness <FitnessCenterIcon style={{ color: '#EA8757', fontSize: '35px' }} /> Club
      </Typography>
      <Box>
        <TextField
          className="search"
          sx={{ input: { fontWeight: '700' } }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="search"
          type="text"
        />
        <Button className="search-icon" sx={{ ml: '-4px' }} onClick={handleSearch}>
          <SearchIcon style={{ fontSize: '35px', color: 'rgb(228, 125, 87)' }} />
        </Button>
      </Box>
      <Box />
    </Box>
  );
};

export default TopNavbar;

import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import Icon from '../assets/icons/dumbbell.png';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Sidebar = ({ bodyPart, setBodyPart }) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(bodyPartsData);
    };
    fetchExercisesData();
  }, []);
  return (
    <Box className="body-parts-container">
      <Typography sx={{ fontSize: '35px', fontWeight: '700' }}>Explore Body Parts</Typography>
      {
                            bodyParts?.length > 0 && (
                              <Link to="/" style={{ textDecoration: 'none' }}>
                                <Button type="button" className={bodyPart === 'all' ? 'btn active' : 'btn'} style={bodyPart === 'all' ? { textTransform: 'capitalize', fontSize: '28px', gap: '20px', width: '100%' } : { textTransform: 'capitalize', fontSize: '28px', gap: '20px', width: '100%' }} onClick={() => setBodyPart('all')}>All</Button>
                              </Link>
                            )
                        }
      {

                            bodyParts?.map((item) => (
                              <Link to="/" key={item} style={{ textDecoration: 'none' }}>
                                <Button type="button" className={bodyPart === item ? 'btn active' : 'btn'} style={item === bodyPart ? { textTransform: 'capitalize', fontSize: '28px', gap: '20px', width: '100%' } : { textTransform: 'capitalize', fontSize: '28px', gap: '20px', width: '100%' }} onClick={() => setBodyPart(item)}>
                                  <img src={Icon} alt="dumbbell" /> {item}
                                </Button>
                              </Link>
                            ))
                        }
    </Box>
  );
};

export default Sidebar;

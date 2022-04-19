import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Button, TextField, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import Exercises from './Exercises';
import Loader from './Loader';

const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyParts, setBodyParts] = useState([])
    const [bodyPart, setBodyPart] = useState('all')
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(8);

    useEffect(() => {
        const fetchExercisesData = async () => {
            if (bodyPart === 'all') {
                const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises')
                setExercises(exercisesData)
            } else {
                const bodyPartsExercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`)
                setExercises(bodyPartsExercises)
            }
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList')

            setBodyParts(bodyPartsData)
        }
        fetchExercisesData()

    }, [bodyPart])



    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(
        indexOfFirstExercise,
        indexOfLastExercise
    );
    const paginate = (event, value) => {
        setCurrentPage(value);
        window.scrollTo(0, 0);
    };

    return (
        <Box className='container'>
            <Box className='navbar'>
                <Typography variant='h5' fontWeight={700} fontSize={'25px'} color='white'>🔶Fit</Typography>
                <Box className='search'>
                    <TextField className='input' placeholder='search' type='text' />
                </Box>
                <Box>
                    <Box className='body-parts-container'>
                        {
                            bodyParts.length > 0 && (
                                <Button type='button' style={{ backgroundColor: bodyPart === 'all' ? 'blue' : 'rgb(228, 125, 87)' }} onClick={() => setBodyPart('all')}>All</Button>
                            )
                        }
                        {
                            bodyParts?.map((item) => (
                                <Box key={item}>
                                    <Button type='button' style={{ backgroundColor: item === bodyPart ? 'blue' : 'rgb(228, 125, 87)' }} onClick={() => setBodyPart(item)}>{item}</Button>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
            <Box className='exercises-wrapper'>
                <Box className='exercises-container'>
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
    )
}

export default Home
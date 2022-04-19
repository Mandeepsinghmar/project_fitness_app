import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import { Typography, Box, Stack } from '@mui/material'

import { fetchData } from '../utils/fetchData'
import HorizontalSrollbar from './HorizontalScrollbar'

export const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
    const { id } = useParams()
    useEffect(() => {
        const fetchExercisesData = async () => {

            const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`)
            setExerciseDetail(exerciseDetailData)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
                    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85'
                }
            };
            fetch(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name} exercise`, options)
                .then(response => response.json())
                .then(response => setExerciseVideos(response.contents))
                .catch(err => console.error(err));

            const targetMuscleExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`)
            const equimentExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`)

            setTargetMuscleExercises(targetMuscleExercisesData)
            setEquipmentExercises(equimentExercisesData)

        }

        fetchExercisesData()

    }, [id])
    console.log(exerciseVideos)
    const exerciseDetails = [
        { name, title: 'Exercise', icon: '⛹️‍♂️' },
        { name: bodyPart, title: 'Body Part', icon: '⛹️‍♂️' },
        { name: target, title: 'Target Muscle', icon: '⛹️‍♂️' },
        { name: equipment, title: 'Equipment', icon: '⛹️‍♂️' },
    ]
    return (
        <Box>
            {
                exerciseDetail && (
                    <>
                        <Box className='detail-exercise'>
                            <img src={gifUrl} alt={name} loading='lazy' />
                            <Stack spacing={2}>
                                {
                                    exerciseDetails.map((item) => (
                                        <Stack direction='row' key={item.name} spacing={3} sx={{ mt: 3 }}>
                                            <Typography className='item'>{item.title}</Typography>
                                            <Typography className='item'>{item.icon}{item.name}</Typography>
                                        </Stack>
                                    ))
                                }
                            </Stack>
                        </Box>

                        <Box className='exercise-videos'>

                            {
                                exerciseVideos.length !== 0 ? exerciseVideos?.slice(0, 3)?.map((item, index) => (
                                    <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'>
                                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                                        <Typography sx={{ fontSize: '18px', color: 'black', fontWeight: '600' }}>{item.video.title}</Typography>
                                        <Typography sx={{ fontSize: '15px', color: 'gray', fontWeight: '600' }}>{item.video.channelName}</Typography>
                                    </a>
                                )) : (
                                    <Box className='loader'>
                                        <InfinitySpin color="grey" />
                                    </Box>
                                )
                            }
                        </Box>

                        <Box className='exercise-suggestions'>
                            <Typography variant='h5' fontWeight={600} textAlign='center' mb={4} >Same Target Muscle Exercises</Typography>
                            <Stack direction='row' spacing={3} sx={{ p: 2 }}>
                                {
                                    targetMuscleExercises.length !== 0 ? (
                                        <HorizontalSrollbar data={targetMuscleExercises} />
                                    ) : (
                                        <Box className='loader'>
                                            <InfinitySpin color="grey" />
                                        </Box>
                                    )
                                }
                            </Stack>
                            <Typography variant='h5' sx={{ m: 4, fontWeight: '600', textAlign: 'center' }}>Same Equipment Exercises</Typography>
                            <Stack direction='row' spacing={3} sx={{ p: 2 }}>
                                {
                                    equipmentExercises.length !== 0 ? (
                                        <HorizontalSrollbar data={equipmentExercises} />
                                    ) : (
                                        <Box className='loader'>
                                            <InfinitySpin color="grey" />
                                        </Box>
                                    )
                                }
                            </Stack>
                        </Box>

                    </>
                )
            }


        </Box>
    )
}

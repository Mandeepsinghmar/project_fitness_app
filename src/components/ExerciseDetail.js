import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { Typography, Box, Stack } from '@mui/material';
import randomColor from 'randomcolor';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import HorizontalSrollbar from './HorizontalScrollbar';

export const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const exerciseDetails = [
    { name: bodyPart, title: 'Body Part', icon: '❇️' },
    { name: target, title: 'Target Muscle', icon: '🤸‍♂️' },
    { name: equipment, title: 'Equipment', icon: '⛹️‍♂️' },
  ];

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions,
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions,
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions,
      );
      const equimentExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions,
      );

      setTargetMuscleExercises(targetMuscleExercisesData);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box className="exercise-detail-container">
      {exerciseDetail && (
        <>
          <Stack direction="row" justifyContent="space-around" gap="30px" p={4} alignItems="center">
            <Box className="detail-exercise">
              <img src={gifUrl} alt={name} loading="lazy" />
              <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" mt="20px">
                {exerciseDetails.map((item) => (
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    key={item.name}
                  >
                    <Typography className="item" textTransform="capitalize">
                      {item.icon}
                      {item.name}
                    </Typography>
                    <Typography>{item.title}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
            <Box className="exercise-videos-wrapper">
              <Typography
                fontSize="30px"
                fontWeight={600}
                mb={4}
                sx={{ textDecoration: 'none', color: '#c471ed' }}
                className="exercise-name"
              >
                {name}
              </Typography>

              <Box className="exercise-videos">
                {exerciseVideos.length !== 0 ? (
                  exerciseVideos?.slice(0, 3)?.map((item, index) => (
                    <a
                      key={index}
                      className="exercise-video"
                      href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={item.video.thumbnails[0].url}
                        alt={item.video.title}
                      />
                      <Typography
                        sx={{
                          color: 'black',
                          fontSize: '18px',
                          fontWeight: '600',
                        }}
                      >
                        {item.video.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '15px',
                          color: 'gray',
                          fontWeight: '600',
                        }}
                      >
                        {item.video.channelName}
                      </Typography>
                    </a>
                  ))
                ) : (
                  <Box className="loader">
                    <InfinitySpin color="grey" />
                  </Box>
                )}
              </Box>
            </Box>
          </Stack>

          <Box className="exercise-suggestions">
            <Typography
              fontSize="30px"
              fontWeight={600}
              textAlign="center"
              mb={4}
              color="rgb(228, 125, 87)"
            >
              Target muscle exercises
            </Typography>
            <Stack direction="row" spacing={3} sx={{ p: 2 }}>
              {targetMuscleExercises.length !== 0 ? (
                <HorizontalSrollbar data={targetMuscleExercises} />
              ) : (
                <Box className="loader">
                  <InfinitySpin color="grey" />
                </Box>
              )}
            </Stack>
            <Typography
              fontSize="30px"
              fontWeight={600}
              textAlign="center"
              m={4}
              color="rgb(228, 125, 87)"
            >
              Equipment exercises
            </Typography>
            <Stack direction="row" spacing={3} sx={{ p: 2 }}>
              {equipmentExercises.length !== 0 ? (
                <HorizontalSrollbar data={equipmentExercises} />
              ) : (
                <Box className="loader">
                  <InfinitySpin color="grey" />
                </Box>
              )}
            </Stack>
          </Box>
        </>
      )}
    </Box>
  );
};

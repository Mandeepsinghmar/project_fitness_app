import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import OtherExercises from '../components/OtherExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

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
    exerciseDetail && (
    <Box mt="60px" sx={{ mt: { lg: '96px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <OtherExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
    )
  );
};

export default ExerciseDetail;

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { ExerciseDetail } from './components/ExerciseDetail';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';

function App() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div className="main-home-container">
      <TopNavbar setExercises={setExercises} />
      <section className="home-fitness-container">
        <div className="sidebar-home">
          <Sidebar bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
        <div className="main-home">
          <Routes>
            <Route path="/" element={<Home exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;

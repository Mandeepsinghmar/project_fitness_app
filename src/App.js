import { Route, Routes } from 'react-router-dom';

import './App.css';
import { ExerciseDetail } from './components/ExerciseDetail';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />

      </Routes>
    </div>
  );
}

export default App;

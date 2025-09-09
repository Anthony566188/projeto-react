// src/App.tsx
// teste

import Welcome from './components/Welcome';
import './App.css';
import ExerciseList from './components/ExerciseList';
import MotivationalMessage from './components/MotivationalMessage';

function App() {
  return (
    <>
      <Welcome />
      <ExerciseList />
      <MotivationalMessage
      message='A disciplina é a ponte entre metas e realizações.'
      author='Anthony'
      />
    </>
  );
}

export default App;

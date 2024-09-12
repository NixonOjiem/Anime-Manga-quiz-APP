import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizScreen from './pages/QuizScreen';
import StartScreen from './pages/StartScreen';
import Results from './pages/Results';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<StartScreen />} />
          <Route path="/Home" element={<StartScreen />} />
          <Route path='/Quiz' element={<QuizScreen />} /> 
          <Route path='/Results' element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

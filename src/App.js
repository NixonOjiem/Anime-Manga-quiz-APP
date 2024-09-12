import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizScreen from './pages/QuizScreen';
import StartScreen from './pages/StartScreen';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<StartScreen />} />
          <Route path="/Home" element={<StartScreen />} />
          <Route path='/Quiz' element={<QuizScreen />} /> 
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

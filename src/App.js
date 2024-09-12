import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizScreen from './pages/QuizScreen';
import StartScreen from './pages/StartScreen';
import ButtonForQuiz from './components/ButtonForQuiz';
import Header from './components/Header';
import IntroductoryContent from './components/IntroductoryContent';
import QuizGenerator from './components/QuizGenerator';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroductoryContent />
      <ButtonForQuiz /> 
      <QuizGenerator />
    </div>
  );
}

export default App;

import './App.css';
import ButtonForQuiz from './components/ButtonForQuiz';
import Header from './components/Header';
import IntroductoryContent from './components/IntroductoryContent';
import QuizGenerator from './components/QuizGenerator';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <IntroductoryContent />
      <ButtonForQuiz /> */}
      <QuizGenerator />
    </div>
  );
}

export default App;

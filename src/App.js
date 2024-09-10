import './App.css';
import ButtonForQuiz from './components/ButtonForQuiz';
import Header from './components/Header';
import IntroductoryContent from './components/IntroductoryContent';

function App() {
  return (
    <div className="App">
      < Header />
      <IntroductoryContent />
      <ButtonForQuiz />
    </div>
  );
}

export default App;

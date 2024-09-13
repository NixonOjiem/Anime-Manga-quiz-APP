import React from 'react';
import Header from '../components/Header';
import IntroductoryContent from '../components/IntroductoryContent';
import ButtonForQuiz from '../components/ButtonForQuiz';

function StartScreen() {
  return (
    <div>
        <Header />
        <IntroductoryContent />
        {/* <ButtonForQuiz /> */}
    </div>
  )
}

export default StartScreen
import React from 'react';
import { Link } from 'react-router-dom';

function ButtonForQuiz() {
  return (
    <div className=''>
      <Link to="/quiz" className="btn btn-primary">
        <button className='Quiz-button'>Start Quiz</button>
      </Link>
    </div>
  )
}

export default ButtonForQuiz
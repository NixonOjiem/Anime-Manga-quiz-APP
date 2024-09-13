import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuizGenerator = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount] = useState(12);
  const [type] = useState('boolean');
  const [fetched, setFetched] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!fetched) {
      fetchQuestions();
      setFetched(true);
    }
  }, [fetched]);

  const fetchQuestions = async () => {
    const url = 'https://opentdb.com/api.php';
    const params = {
      amount,
      category: '31',
      type
    };

    try {
      const response = await axios.get(url, { params });
      const data = response.data;
      console.log('Response data:', data);
      if (data && data.results) {
        setQuestions(data.results);
        setCorrectAnswers(data.results.reduce((acc, question, index) => {
          acc[index] = question.correct_answer;
          return acc;
        }, {}));
        setLoading(false);
      } else {
        console.error('Error: results property not found in response data');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (index, answer) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [index]: answer
    }));
  };

  const handleSubmit = () => {
    const score = Object.keys(userAnswers).reduce((acc, index) => {
      const userAnswerNormalized = userAnswers[index].toLowerCase();
      const correctAnswerNormalized = correctAnswers[index].toLowerCase();
      if (userAnswerNormalized === correctAnswerNormalized) {
        acc++;
      }
      console.log('User answers:', userAnswers);
      return acc;
    }, 0);

    // Check if all answers are either True or False (case-insensitive)
    const allAnswersValid = Object.values(userAnswers).every(answer => {
      const normalizedAnswer = answer.toLowerCase();
      return normalizedAnswer === 'true' || normalizedAnswer === 'false';
    });

    if (allAnswersValid) {
      setScore(score);
      console.log(`User scored ${score} out of ${amount}`);
      // Redirect to the results page
      navigate('/results', { state: { score, amount } });
    } else {
      setShowErrorPopup(true);
      console.error('Error: Not all answers are either True or False');
    }
  };

  const closePopup = () => {
    setShowErrorPopup(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('Questions:', questions);
  return (
    <div>
      <h3 className='Questions-Heading'>Questions</h3>
      {questions.map((question, index) => {
        console.log('Question:', question);
        return (
          <div key={index}>
            <p className='Question'>{question.question}</p>
            <input
              type='text'
              value={userAnswers[index] || ''}
              onChange={e => handleAnswerChange(index, e.target.value)}
              placeholder='True or False'
              className='User-Answer-text'
            />
          </div>
        );
      })}
      <button onClick={handleSubmit} className='Submit-Button'>Submit Answers</button>
      
      {score !== null && (
        <div className='score'>
          <h2>Your Score: {score} out of {amount}</h2>
        </div>
      )}
      
      {showErrorPopup && (
        <div className='popup'>
          <div className='popup-inner'>
            <h2>Error</h2>
            <p>Not all answers are either True or False.</p>
            <button onClick={closePopup} className='Close-Button'>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;

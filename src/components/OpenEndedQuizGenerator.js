import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OpenEndedQuizGenerator() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({}); // store user's answers
  const [score, setScore] = useState(0); // store the score
  const navigate = useNavigate();
  const [userScore, setUserScore] = useState(0)

  const myAPI = "https://opentdb.com/api.php?amount=12&category=31&type=multiple";

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(myAPI);
        const shuffledQuestions = response.data.results.map((question) => {
          const answers = [...question.incorrect_answers, question.correct_answer];
          for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
          }
          return { ...question, incorrect_answers: answers };
        });
        setQuestions(shuffledQuestions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [myAPI]);

  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct_answer) {
        score++;
      }
    });
    return score;
    setUserScore(score);
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setScore(score); // update the score state
    console.log("Correct answers:");
    questions.forEach((question, index) => {
      console.log(`Question ${index + 1}: ${question.correct_answer}`);
    });
    console.log(`Your score is ${score} out of ${questions.length}`);
    
    // Navigate to ResultsComponent and pass the score as a prop
    navigate('/results', { state: { score, amount: questions.length } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <ul>
            {question.incorrect_answers.map((answer, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={userAnswers[index] === answer}
                  onChange={() => handleAnswerChange(index, answer)}
                />
                {answer}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <p>Your score is {score} out of {questions.length} {userScore}</p>
      
    </div>
  );
}

export default OpenEndedQuizGenerator;
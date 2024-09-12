
import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultsComponent = () => {
  const location = useLocation();
  const { score, amount } = location.state || { score: 0, amount: 0 };

  return (
    <div>
      <h2>Your Score: {score} out of {amount}</h2>
    </div>
  );
};

export default ResultsComponent;
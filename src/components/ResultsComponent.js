import React from 'react';
import { useLocation } from 'react-router-dom';
import PieChartComponent from './PieChartComponent'; // Import the PieChartComponent

const ResultsComponent = () => {
  const location = useLocation();
  const { score, amount } = location.state || { score: 0, amount: 0 };
  const percentageData = (score / amount) * 100;
  const displayedPercentage = Math.round(percentageData);

  const data = [
    { title: 'Correct', value: displayedPercentage, color: '#4caf50' },
    { title: 'Incorrect', value: 100 - displayedPercentage, color: '#f44336' },
  ];

  return (
    <div>
      <h2>Your Score: {score} out of {amount}</h2>
      <h2>Percentage: {displayedPercentage}%</h2>
      <PieChartComponent data={data} /> {/* Pass the data as a prop */}
    </div>
  );
};

export default ResultsComponent;

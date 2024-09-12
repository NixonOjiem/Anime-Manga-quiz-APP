import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const PieChartComponent = ({ data }) => {
  return (
    <PieChart
      data={data}
      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
      labelStyle={{
        fontSize: '5px',
        fontFamily: 'sans-serif',
      }}
      radius={15}
       labelPosition={112}
    />
  );
};

export default PieChartComponent;

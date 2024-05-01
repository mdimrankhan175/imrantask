import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SummaryPage = ({ statusList }) => {
  return (
    <BarChart width={200} height={300} data={statusList}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="task" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="percentage" fill="#8884d8" />
    </BarChart>
  );
};

export default SummaryPage;

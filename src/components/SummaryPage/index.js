import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';

const SummaryPageContainer = styled.div`
  border: 2px solid blue;
  padding: 10px;
  margin: 20px;  
  border-radius:10px;
  width:30%;
`;     


const Heading=styled.h3`
font-family:'roboto';
color:green;
font-weight:800;
`;

const SummaryPage = ({ statusList }) => {
  return (
    <SummaryPageContainer>
      <Heading>Task Summary Page</Heading>
      <BarChart width={300} height={300} data={statusList}>       
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="task" />
        <YAxis type="number" domain={[0, 100]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="percentage" fill="#8884d8" />
      </BarChart>
    </SummaryPageContainer>
  );
};

// Custom Tooltip component to display task name and percentage
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: 'white', padding: '5px', border: '1px solid #ccc' }}>
        <p>{`Task: ${payload[0].payload.task}`}</p>
        <p>{`Percentage: ${payload[0].value}%`}</p> {/* Added % symbol */}
      </div>
    );
  }

  return null;
};

export default SummaryPage;

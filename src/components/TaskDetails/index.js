// TaskDetails.js
import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  border: 2px solid cyan;
  padding: 10px;
  margin-top: 10px;
  color:white;
  border-radius:10px;
`;

const Heading = styled.h3`
  margin-bottom: 10px;
  text-decoration:underline;
`;

const DetailItem = styled.p`
  margin-bottom: 5px;
`;

const CloseButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc4c39;
  }
`;

const TaskDetails = ({ task, onClose }) => {
  return (
    <DetailsContainer>
      <Heading>Task Details</Heading>
      <DetailItem>Task: {task.task}</DetailItem>
      <DetailItem>Description: {task.description}</DetailItem>
      <DetailItem>Tag: {task.tag}</DetailItem>
      <DetailItem>Status: {task.status}</DetailItem>
      <DetailItem>Due Date: {task.dueDate}</DetailItem>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </DetailsContainer>
  );
};

export default TaskDetails;

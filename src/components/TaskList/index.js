import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import TaskDetails from '../TaskDetails'; // Import TaskDetails component

import {
  AddTaskContainer,
  TagsHeading,
  TaskListUl,
  TaskListLi,
  TaskText,
  TaskTag,
  NoTaskText,
  TagDel,
  StatusButton
} from './styledComponents';

const TaskList = ({ taskList, activeTag, deleteTask, updateTaskStatus }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [statusList, setStatusList] = useState([]);

  // Initialize statusList when taskList changes
  useEffect(() => {
    const updatedStatusList = taskList.map(task => ({
      ...task,
      status: task.status || 'New', // Default status is 'New' if not provided
      percentage: task.status === 'started' ? 25 : task.status === 'completed' ? 100 : 10 // Set percentage based on status
    }));
    setStatusList(updatedStatusList);
  }, [taskList]);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleStatusChange = (taskId, newStatus) => {
    updateTaskStatus(taskId, newStatus);

    // Define a function to calculate the percentage based on the task status
    const calculatePercentage = (status) => {
      switch (status) {
        case 'started':
          return 25;
        case 'completed':
          return 100;
        default:
          return 10;
      }
    };

    // Update the statusList based on the changed task status
    const updatedStatusList = statusList.map(task => {
      // If the task's id matches the taskId, update its percentage
      if (task.id === taskId) {
        return {
          ...task,
          // Calculate the new percentage based on the newStatus
          percentage: calculatePercentage(newStatus)
        };
      }
      // For other tasks, keep the percentage unchanged
      return task;
    });

    // Update the statusList state with the updatedStatusList
    setStatusList(updatedStatusList);
  };

  const filterTaskList =
    activeTag === 'ALL' ? taskList : taskList.filter((each) => each.tag === activeTag);

  return (
    <AddTaskContainer>
      <TagsHeading>Tasks</TagsHeading>
      <p style={{color:'white'}}>Click on Task Name or Tag to get Details of Task.</p>
      <TaskListUl>
        {taskList.length === 0 ? (
          <NoTaskText>No Tasks Added Yet</NoTaskText>
        ) : (
          filterTaskList.map((task) => (
            <TaskListLi key={task.id}>
              <div>
                <div onClick={() => handleTaskClick(task)} >
                  <TaskText>{task.task}</TaskText>
                  <TagDel>
                    <TaskTag>{task.tag}</TaskTag>
                    <div>
                      <StatusButton
                        onClick={() => handleStatusChange(task.id, 'started')}
                        status={task.status === 'started'}
                      >
                        Start
                      </StatusButton>
                      <StatusButton
                        onClick={() => handleStatusChange(task.id, 'completed')}
                        status={task.status === 'completed'}
                      >
                        Completed
                      </StatusButton>
                    </div>
                    <button type="button" onClick={() => deleteTask(task.id)}>
                      <MdDelete />
                    </button>
                  </TagDel>
                </div>
                {selectedTask && selectedTask.id === task.id && (
                  <TaskDetails task={task} onClose={() => setSelectedTask(null)} /> 
                )}
              </div>
            </TaskListLi>
          ))
        )}
      </TaskListUl>
    </AddTaskContainer>
  );
};

export default TaskList;

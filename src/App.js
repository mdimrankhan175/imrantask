import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SummaryPage from './components/SummaryPage'; // Import SummaryPage component

class App extends Component {
  state = {
    taskList: [],
    activeTag: 'ALL', // Set default to 'ALL' to show all tasks initially
  };

  // Function to add a new task
  addTask = (newTask) => {
    this.setState((prevState) => ({
      taskList: [...prevState.taskList, newTask],
    }));
  };

  // Function to delete a task
  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.filter((task) => task.id !== taskId),
    }));
  };

  // Function to handle tag click
  onClickActiveTag = (event) => {
    this.setState({
      activeTag: this.state.activeTag === event.target.value ? 'ALL' : event.target.value,
    });
  };

  // Function to calculate the status list based on task list
  calculateStatusList = () => {
    const { taskList } = this.state;

    // Logic to calculate status list based on task list
    const statusList = taskList.map(task => ({
      task: task.task,
      percentage: this.calculatePercentage(task.status)
    }));

    return statusList;
  };

  // Function to calculate percentage based on task status
  calculatePercentage = (status) => {
    // Logic to calculate percentage based on status
    // You may adjust this logic based on your requirements
    if (status === 'started') return 25;
    if (status === 'completed') return 100;
    return 10; // Default percentage for 'New' status
  };

  render() {
    const { taskList, activeTag } = this.state;
    const statusList = this.calculateStatusList(); // Calculate status list

    return (
      <div className="App">
        <TaskForm addTask={this.addTask} />
        <TaskList taskList={taskList} activeTag={activeTag} deleteTask={this.deleteTask} />
        <SummaryPage statusList={statusList} /> {/* Pass statusList as prop */}
      </div>
    );
  }
}

export default App;

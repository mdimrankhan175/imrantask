import React, { Component } from 'react';
import { v4 } from 'uuid';

import {
  CreateTaskContainer,
  CreateForm,
  FormHeading,
  LabelInputContainer,
  Label,
  Input,
  SelectInput,
  OptionInput,
  Button,
  ErrorMessage,
} from './styledComponents';

const tagsList = [
  { optionId: 'HEALTH', displayText: 'Health' },
  { optionId: 'EDUCATION', displayText: 'Education' },
  { optionId: 'ENTERTAINMENT', displayText: 'Entertainment' },
  { optionId: 'SPORTS', displayText: 'Sports' },
  { optionId: 'TRAVEL', displayText: 'Travel' },
  { optionId: 'OTHERS', displayText: 'Others' },
];

class TaskForm extends Component {
  state = {
    inputTask: '',
    inputDescription: '',
    inputTag: tagsList[0].optionId,
    inputDueDate: '',
    errors: {},
    taskList: [], // Add taskList state
  };

  // Function to validate form inputs
  validateInputs = () => {
    const { inputTask, inputDescription, inputDueDate } = this.state;
    const errors = {};

    if (!inputTask.trim()) {
      errors.task = 'Task is required';
    }
    if (!inputDescription.trim()) {
      errors.description = 'Description is required';
    }
    if (!inputDueDate.trim()) {
      errors.dueDate = 'Due date is required';
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(inputDueDate)) {
      errors.dueDate = 'Due date must be in the format YYYY-MM-DD';
    }

    return errors;
  };

  // Function to handle input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Function to handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validateInputs();
    if (Object.keys(errors).length === 0) {
      const { inputTask, inputDescription, inputTag, inputDueDate, taskList } = this.state;
      const newTask = {
        id: v4(),
        task: inputTask,
        description: inputDescription,
        tag: inputTag,
        dueDate: inputDueDate,
      };
      const updatedTaskList = [...taskList, { task: inputTask, tag: inputTag }]; // Updated taskList
      this.props.addTask(newTask);
      this.setState({
        inputTask: '',
        inputDescription: '',
        inputTag: tagsList[0].optionId,
        inputDueDate: '',
        errors: {},
        taskList: updatedTaskList, // Update taskList in state
      });
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { inputTask, inputDescription, inputTag, inputDueDate, errors } = this.state;
    return (
      <CreateTaskContainer>
        <CreateForm onSubmit={this.handleSubmit}>
          <FormHeading>Create a task!</FormHeading>
          <LabelInputContainer>
            <Label htmlFor="inputTask">Task</Label>
            <Input
              type="text"
              placeholder="Enter the task here"
              name="inputTask"
              value={inputTask}
              onChange={this.handleInputChange}
              id="inputTask"
            />
            {errors.task && <ErrorMessage>{errors.task}</ErrorMessage>}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="inputDescription">Description</Label>
            <Input
              type="text"
              placeholder="Enter description here"
              name="inputDescription"
              value={inputDescription}
              onChange={this.handleInputChange}
              id="inputDescription"
            />
            {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="selectTag">Tags</Label>
            <SelectInput
              name="inputTag"
              value={inputTag}
              onChange={this.handleInputChange}
              id="selectTag"
            >
              {tagsList.map((each) => (
                <OptionInput value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </OptionInput>
              ))}
            </SelectInput>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="inputDueDate">Due Date</Label>
            <Input
              type="date"
              name="inputDueDate"
              value={inputDueDate}
              onChange={this.handleInputChange}
              id="inputDueDate"
            />
            {errors.dueDate && <ErrorMessage>{errors.dueDate}</ErrorMessage>}
          </LabelInputContainer>
          <Button type="submit">Add Task</Button>
        </CreateForm>        
      </CreateTaskContainer>
    );
  }
}

export default TaskForm;

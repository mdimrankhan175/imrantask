import styled from 'styled-components'

export const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #000000;
  min-height: 100vh;
  width: 40%;
  padding: 20px;
`

export const TagsHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`

export const TagsListUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`

export const TagsList = styled.li`
  display: flex;
  margin: 7px;
`

export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f1f5f9;
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
`

export const TaskListUl = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 0px;
`

export const TaskListLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1a171d;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
`

export const TaskText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
`

export const TaskTag = styled.p`
  background-color: #f3aa4e;
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  padding-left: 15px;
  padding-right: 25px;
  border-radius: 10px;
  border: none;
`

export const NoTaskText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  align-self: center;
  text-align: center;
  margin-top: 150px;
`

export const TagDel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StatusButton = styled.button`
  background-color: ${props => (props.status ? '#4CAF50' : '#f3aa4e')};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  margin-right: 10px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => (props.status ? '#45a049' : '#f1a165')};
  }
`;

export const CloseButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc4c39;
  }
`;

export const DetailsContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  color:white;
`;

export const Heading = styled.h3`
  margin-bottom: 10px;
`;

export const DetailItem = styled.p`
  margin-bottom: 5px;
`;

export const LiContainer=styled.div`
display:flex;
justify-content:space-between;
`
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const CreateTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #131213;
  min-height: 100vh;
  max-height: 500vh;
  width: 30%;
  padding: 20px;
  padding-bottom: 732px;
`

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`

export const FormHeading = styled.h1`
  text-align: center;
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
`

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`

export const Label = styled.label`
  color: #f8f8f8;
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  padding-left: 15px;
  outline: none;
  margin-bottom: 25px;
`

export const SelectInput = styled.select`
  height: 40px;
  width: 100%;
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  padding-left: 15px;
  outline: none;
  margin-bottom: 25px;
`

export const OptionInput = styled.option`
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
`

export const Button = styled.button`
  background-color: #f3aa4e;
  color: #f1f5f9;
  height: 40px;
  width: 120px;
  margin-top: 20px;
  align-items: center;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

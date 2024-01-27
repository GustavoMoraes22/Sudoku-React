import styled from "styled-components";

export const Container = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-size: calc(10px + 2vmin);
    color:#ffffff;
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
`

export const CheckButton = styled.button`
  background-color: tomato;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  margin: 0 20px;
  cursor: pointer;
  transition: 1s;

  &:hover{
    transform: scale(1.2);
  }

`

export const SolveButton = styled.button`
  background-color: orange;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  margin: 0 20px;
  cursor: pointer;
  transition: 1s;

  &:hover{
    transform: scale(1.2);
  }
`

export const ResetButton = styled.button`
  background-color: aqua;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  margin: 0 20px;
  cursor: pointer;
  transition: 1s;

  &:hover{
    transform: scale(1.2);
  }
`

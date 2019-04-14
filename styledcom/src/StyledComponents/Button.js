import styled from "styled-components";

export const Button = styled.button`
  background: gray;
  border: gray;
  border-radius: 3px;
  height: 30px;
  color: white;
  outline: none;
  margin: auto;
  font-size: 1em;

  &:hover {
    border: #6a89cc;
    background: #6a89cc;
    color: white;
    cursor: pointer;
  }
`;

import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  width: 300px;
  margin: 50px auto;
`;
export const FormGroup = styled.form`
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: #999fa5;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
  border: 1px solid #e8e8e8;
  outline: none;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: lightgray;
  display: block;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #999fa5;
  display: block;
`;
export const Button = styled.button<any>`
  ${props =>
    props.design === "primary" &&
    css`
      background: #5faf2d;
      color: white;
    `}
  border-radius: 24px;
  outline: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 8px 16px;
  cursor: pointer;
  transition: opacity 1s ease 0s;
  margin: 0 auto;
  &:hover {
    outline: none;
    opacity: 0.7;
  }
`;

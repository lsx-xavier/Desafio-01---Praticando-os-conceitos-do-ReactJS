import styled from "styled-components";
import { DefaultContainer } from "../../styles/DefaultContainer";

export const Container = styled.form`
  ${DefaultContainer}

  gap: .8rem;
  margin-top: -3rem;
`;

export const Input = styled.input`
  display: flex;
  color: #fff;
  background-color: #262626;
  outline: none;
  border: 0;
  border-radius: .8rem;
  padding: 1.6rem;
  width: 63.8rem;
  font-size: 1.6rem;
  font-weight: 400;

  &::placeholder {
    color: #808080;
  }

  &:focus::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.6rem;
  background-color: #1E6F9F;
  outline: none;
  border: 0;
  border-radius: .8rem;
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s linear;
  width: fit-content;

  svg {
    font-size: 1.6rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background-color: #4EA8DE;
  }
`;

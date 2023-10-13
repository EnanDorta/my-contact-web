import styled, { css } from "styled-components";

interface InputFormProps {
  error?: boolean;
}

export const InputForm = styled.input<InputFormProps>`
  width: 100%;
  height: 52px;
  background: #fff;
  border: 2px solid #fff;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  outline: 0;
  padding: 0 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;


  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }


  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`

import styled, { css } from 'styled-components';

interface ButtonFormProps {
  danger: boolean;
}

export const ButtonForm = styled.button<ButtonFormProps>`
  height: 52px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: background 0.2s ease-in;


  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }


  ${({ theme, danger }) => (
    danger && css`
      height: 40px;
      padding: 10px 16px;

      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `
  )}
`

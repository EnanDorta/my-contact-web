import styled, { css } from "styled-components";

interface ContainerProps {
  type: "default" | "success" | "danger";
}

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
};

export const Container = styled.div<ContainerProps>`
  padding: 16px 32px;

  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & + & {
    margin-top: 12px;
  }

  ${({ type }) => containerVariants[type] || containerVariants.default}

  strong {
    margin-left: 8px;
  }
`;

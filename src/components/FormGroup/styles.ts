import styled from "styled-components";

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    margin-top: 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.danger.main};
    display: block;
  }

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      right: 16px;
      top: 18px;
    }
  }
`;

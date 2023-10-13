import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 16px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 24px;
  }
`

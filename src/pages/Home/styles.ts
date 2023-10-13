import styled from "styled-components";

export const Container = styled.div`
  margin-top: 39px;
`

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.4);
    outline: 0;
    padding: 0 16px;
  }

  &::placeholder {
    color: #BCBCBC;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2 ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`

interface ListHeaderProps {
  orderBy?: string;
}

export const ListHeader = styled.div<ListHeaderProps>`
  margin-top: 24px;

  header {
    margin-bottom: 8px;
    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center
    }

    img {
      transform: ${({ orderBy }): any => orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: transform 0.2s ease-in;
    }
  }
`

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        margin-left: 8px;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
      }
    }

    span {
        display: block !important;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray[200]};
      }
  }

  .actions {
      display: flex;
      align-items: center;

      button {
        background: transparent;
        border: none;
        margin-left: 8px;
      }
    }

  & + & {
    margin-top: 16px;
  }
`

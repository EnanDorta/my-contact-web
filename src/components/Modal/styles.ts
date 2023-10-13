import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`

interface ContainerProps {
  danger: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 450px;
  background: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  p {
  font-size: 16px;
  margin-top: 8px;
}
`

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: 0;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
}
`

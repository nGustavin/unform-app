import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 45px;
    text-align: center;
    font-weight: bold;
    color: #e6e6e6;
    background-color: #fff3;
    border: 2px #e6e6e6;
    border-radius: 2px;
  }
`

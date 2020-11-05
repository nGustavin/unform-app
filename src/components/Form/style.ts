import styled from 'styled-components'

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  Input {
    background-color: #0f52ba;
    border: none;
    padding: 10px 10px;
    text-align: center;
    width: 360px;
    color: white;
    font-size: 13pt;
    margin: 25px 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 0px 3px #349e11;
    transition: 0.2s;

    :hover {
      box-shadow: 0px 0px 0px 2px #ba3309;
      background-color: #1d4bad;
    }
    ::placeholder {
      color: #e6e6e6;
      font-size: 11pt;
      text-align: center;
      opacity: 0.3;
    }
  }
  button {
    height: 45px;
    width: 250px;
    border-radius: 8px;
    color: white;
    background-color: #349e11;
    font-weight: 600;
    font-size: 14pt;
    transition: 0.2s;
    margin-top: 15px;

    :hover {
      background: #41912b;
      cursor: pointer;
    }
  }
`

export default InputStyle

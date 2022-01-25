import styled from "styled-components";

const NeuBtn = styled.input`
  font-family: 'ibm_plex_monosemibold', sans-serif;
  height: 10vw;
  width: 10vw;
  cursor: pointer;
  outline: none;
  border-color: transparent;
  border-radius: 10px;
  background: #F1F1F3;
  box-shadow:  4px 4px 6px #bababa, 
              -4px -4px 6px #ffffff;

  &:active, &:hover {
    border-radius: 10px;
    background: #F1F1F3;
  }
`;

const Button = (props) => {
  return (
    <NeuBtn type="button" onClick={props.handleClick} value={props.label} />
  )
}

export default Button;
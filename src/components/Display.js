import styled from "styled-components";

import NumReadOut from './NumReadOut';

const DisplayWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #DDD;
  line-height: 1;
  color: #999;
`
const InputWrap = styled.div`
  height: 2rem;
  margin-bottom: 3rem;
  
  & > div {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    letter-spacing: .15em;
  }
`;

const OutputWrap = styled.div`
  height: 3rem;
  padding-bottom: 1rem;

  & > div {
    border: none;
    text-align: right;
    background-color: transparent;
    font-size: 3rem;
    letter-spacing: .05em;
  }
`;


const Display = (props) => {
  return (
    <DisplayWrap>
      <InputWrap>
        <NumReadOut display={props.input}/>
      </InputWrap>
      
      <OutputWrap>
        <NumReadOut display={props.output}/>
      </OutputWrap>
    </DisplayWrap>
  )
}

export default Display;
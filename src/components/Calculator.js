import React from "react";
import styled from "styled-components";
import GlobalFonts from '../fonts/Fonts';

import Header from "./Header";
import Button from "./Button";
import Display from "./Display";

const Main = styled.main`
  height: 100vh;
  width: 100%;
  background-color: #DDD;
  margin: 0 auto;
  font-family: 'ibm_plex_monosemibold', sans-serif;
  text-align: center;
`;

const CalcFace = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  background-color: #F1F1F3;
  border: 1px solid #CCC;
  padding: 1rem;
  border-radius: 20px;

  &::after {
    content: "";
    box-shadow:  4px 4px 6px #bababa, 
                -4px -4px 6px #ffffff;
    height: 103%;
    width: 103%;
    position: absolute;
    left: -10px;
    top: -10px;
    z-index: -1;
    border-radius: 20px;
  }
`;

const Keypad = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
`;

export default class Calculator extends React.Component {
  constructor() {
    super();
    
    this.state = {
      input: "",
      output: "",
    }
  };

  handleClick = ( event ) => {
    const value = event.target.value;
    
    switch(value) {

      case "=": {
        if ( this.state.input !== "" ) {
          let equals = "";
          
          try {
            equals = eval( this.state.input );
          }
          catch(err) {
            this.setState({
              output: "ERROR"
            });
          }

          if ( equals === undefined ) {
            this.setState({
              output: "ERROR"
            });
          } else {
            this.setState({
              output: equals,
              input: ""
            });
          }
        }
        break;
      }
      
      case "AC": {
        this.setState({
          output: "",
          input: ""
        });
        break;
      }
      
      case "\u2190": {
        let str = this.state.input;
        str = str.slice(0, -1);
        this.setState({
          input: str
        });
        break;
      }
      
      default: {
        this.setState({
          input: this.state.input += value
        });
      }
    }
  }

  render() {
    return (
      <Main>
        <GlobalFonts />
        <Header title={"Just a Calculator"}/>
        <CalcFace>
          <Display input={this.state.input} output={this.state.output} />
          <Keypad>

              <Button handleClick={this.handleClick} label={'AC'}/>
              <Button handleClick={this.handleClick} label={'\u2190'}/>
              <Button handleClick={this.handleClick} label={'/'}/>
              <Button handleClick={this.handleClick} label={'/'}/>

              <Button handleClick={this.handleClick} label={'7'}/>
              <Button handleClick={this.handleClick} label={'8'}/>
              <Button handleClick={this.handleClick} label={'9'}/>
              <Button handleClick={this.handleClick} label={'*'}/>

              <Button handleClick={this.handleClick} label={'4'}/>
              <Button handleClick={this.handleClick} label={'5'}/>
              <Button handleClick={this.handleClick} label={'6'}/>
              <Button handleClick={this.handleClick} label={'+'}/>

              <Button handleClick={this.handleClick} label={'1'}/>
              <Button handleClick={this.handleClick} label={'2'}/>
              <Button handleClick={this.handleClick} label={'3'}/>
              <Button handleClick={this.handleClick} label={'-'}/>

              <Button handleClick={this.handleClick} label={'0'}/>
              <Button handleClick={this.handleClick} label={'.'}/>
              <Button handleClick={this.handleClick} label={'='}/>
          </Keypad>
        </CalcFace>
      </Main>      
    )
  }
}
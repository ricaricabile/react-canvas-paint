
import React from "react";
import './App.css';
import dayjs from 'dayjs';
import {Badge,
  Group,
  Text,
  Container, Title, SimpleGrid, Input } from '@mantine/core';
import classes from './calculator.module.css';
import Footer from './footer.component.jsx';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: "",
      value1: 0,
      value2: 0,
      show : '',
      operator: null,
      clear: false
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    if(this.state.clear){
      this.setState({show:'',clear: false});
      return;
    }

    if(this.state.operator ==null){
    this.setState({
      value1: parseInt(this.state.value1 +""+ e.target.innerText),
      show: this.state.show +""+e.target.innerText
    });
    }
    else if (this.state.operator !== null && this.state.operator !=='='){
      this.setState({
        value2: parseInt(this.state.value2 +""+ e.target.innerText),
        show: this.state.show +""+e.target.innerText
      });
    }
    
  }
  erase(e) {
      this.setState({
        output: "",
        value1: 0,
        value2: 0,
        show: '',
        operator: null,
        clear: true
      })
  }
  handleOperator(e) {
    if(this.state.clear){
      this.setState({show:'',clear: false});
      return;
    }
    if(e.target.innerText === '='){
      var answer=0;
      switch(this.state.operator){
        case '+': 
          answer = this.state.value1 + this.state.value2;
        break;
        case '-':
          answer = this.state.value1 - this.state.value2;
        break;
        case '/':
          answer = this.state.value1 / this.state.value2;
        break;
        case '*':
          answer = this.state.value1 * this.state.value2;
        break;
        default: answer =0; break;
      }
      this.setState({
        output: "",
        value1: 0,
        value2: 0,
        show: answer,
        operator: null,
        clear: true
      })
    }
    else {
      if(this.state.operator !=null){
        return;
        }
    this.setState({
      operator: e.target.innerText,
      show: this.state.show +""+e.target.innerText
    });
  }
  }

  render() {
    return (
      <div>
      <Container mt={30} size={700}  sx={{overflow: 'hidden'}} className="mainwindow">
        <SimpleGrid  cols={{ base: 1 }} sx={{width: '100%'}}>
      <Group justify="center">
        <Badge variant="filled" size="lg">
        Calculator
        </Badge>
      </Group>
      <Title order={4} ta="center" mt="sm">
        Perform basic mathematical operations
      </Title>
      <Group mt={10}>
      <Text fs='italic'>Mathematical Operations:</Text>
      <Text fs='italic'>(Addition) (+) </Text> 
      <Text fs='italic'>(Subtraction) (-) </Text>
      <Text fs='italic'>(Multiplication) (*) </Text> 
      <Text fs='italic'>(Division) (/)</Text> 
      </Group>
      <div className={classes.root}>
    <Group className={classes.roots} >
       <div className="container" style={{borderRadius: '5px', paddingBottom: '5px'}}>
       <Input 
      className="input"
      value = {this.state.show}
      onChange={this.handleInput}
    />
      
      <div className = "row2" >
      <div className = "item" onClick={this.handleInput}>7</div>
      <div className = "item" onClick={this.handleInput}>8</div>
      <div className = "item" onClick={this.handleInput}>9</div>
  </div>
  <div className = "itemTotal" onClick={this.handleOperator.bind(this)}>=</div>
      
      <div className="row3" >
      <div className = "item" onClick={this.handleInput}>4</div>
      <div className = "item" onClick={this.handleInput}>5</div>
      <div className = "item" onClick={this.handleInput}>6</div>
  </div>
  <div className = "item row3d" onClick={this.handleOperator.bind(this)}>+</div>
      
      <div className="row4" >
      <div className = "item" onClick={this.handleInput}>1</div>
      <div className = "item" onClick={this.handleInput}>2</div>
      <div className = "item" onClick={this.handleInput}>3</div>
  </div>
  <div className = "item row4d" onClick={this.handleOperator.bind(this)}>-</div>
      
      <div className="row5" >
      <div className = "item" onClick={this.erase.bind(this)}>&#8592;</div>
      <div className = "item" onClick={this.handleInput}>0</div>
      <div className = "item" onClick={this.handleOperator.bind(this)}>/</div>
      </div>
      <div className = "item row5d" onClick={this.handleOperator.bind(this)}>*</div>
  </div>
  </Group>
</div>
</SimpleGrid>
    </Container>
 <Footer/>
 </div>
    );
  }
}
export default App;

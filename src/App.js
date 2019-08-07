import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './App.css';
import Keyboard from './components/Keyboard'
import Display from './components/Display'

class App extends React.Component{
  state = {
      displayedValue: "0",
      buffer: '',
      values: [],
      result: 0,
      operand: false
  }

  calc() {
    let result = 0;
    let { values } = this.state;

    switch(this.state.operand) {
      case '+':
        result = values[0] + values[1]
      break;
      case '-':
        result = values[0] - values[1]
      break;
      case '*':
        result = values[0] * values[1]
      break;
      case '/':
        result = values[0] / values[1]
      break;
      default:
        break;
    }
    this.setState({
      result,
      values: [result]
    })
  }
  calculate=(value) => {
    
    console.log(value)
    if(/[0-9.]/.test(value)) {
      if(value === '.' && /\./.test(this.state.buffer))
        return;
      this.setState({
        buffer: this.state.buffer + value
      })
    }
    if(['-', '+', '/', '*', '='].indexOf(value) > -1) {
      this.setState(prevState => {
        if(value !== '=')
          prevState.operand = value
        if(this.state.buffer) {
          prevState.values.push(parseFloat(this.state.buffer))
          prevState.buffer = ''
        }
        return prevState
      }, () => {
        this.state.values.length === 2 && this.calc()
      })
    }
    if(value === "Sign") {
      this.setState({
        buffer: '' + -parseFloat(this.state.buffer === '' ? this.state.result : this.state.buffer)
      })
    }
    if(value === "InputPercent") {
      this.setState({
        buffer: '' + parseFloat(this.state.buffer === '' ? this.state.result : this.state.buffer) / 100
      })
    }
    if(value === "Clean") {
      this.setState({
        displayedValue: "0",
        buffer: '',
        values: [],
        result: 0,
        operand: false
      })
    }
  }
  render(){
      let displayValue = 0;
      if(this.state.values.length === 1)
        displayValue = this.state.values[0]
      if(this.state.buffer)
        displayValue = this.state.buffer;
      else if (this.state.result)
        displayValue = this.state.result;
      else if (this.state.values.length === 1)
        displayValue = this.state.values[0]
      let fix = displayValue
      fix = parseFloat(fix)
      fix = +fix.toFixed(10)
      return(
        <div className="App">
          <KeyboardEventHandler
            handleKeys={['0', '1', '2','3', '4', '5','6', '7', '8','9', '/', '*','-', '+', 'enter', '.','delete']}
            onKeyEvent={(key, e) => this.calculate(key === 'enter' ? '=': key === 'delete' ? 'Clean' : key)} />
          <div>
          <Display value={fix}></Display>
          <Keyboard sendValue={this.calculate}/>
          {/* {this.state.values.join(', ')}
          <div>buffer {this.state.buffer}</div>
          <div>result {this.state.result}</div>
          <div>operand {this.state.operand}</div>
          <div>displayValue {displayValue}</div> */}
          </div>
      </div>
      )
  }
}

export default App;
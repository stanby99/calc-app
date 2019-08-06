import React from 'react';
import './App.css';
import Keyboard from './components/Keyboard'
import Display from './components/Display'


            
// }
// updateState = (value) => {
//     this.setState({
//       displayedValue: value
//     },()=>{console.log(this.state)})
//   }
// lastSymbol: "0"
      




class App extends React.Component{
      state = {
        // displayedValue: value
        // prevValue: firstClick
        // nextValue: secondClik
        // Operator: inputOp
        // MathOperator: inputMath
      }
      // UpdateState ={
      //     // '/': (prevValue, nextValue) => prevValue / nextValue,
      //   // '*': (prevValue, nextValue) => prevValue * nextValue,
      //   // '+': (prevValue, nextValue) => prevValue + nextValue,
      //   // '-': (prevValue, nextValue) => prevValue - nextValue,
      //   // '=': (prevValue, nextValue) => nextValue
      //   // 'Clean': (prevValue, nextValue) => 0
      //   // 'Sign' : (prevValue) => prevValue * -1
      //   // 'InputPercent': 
      // }

  render(){
      return(
        <div className="App">
        <div>
        <Display>{this.state.displayedValue}</Display>
        <Keyboard/>
        </div>
      </div>
      )
  }
}

export default App;

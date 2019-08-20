import React from 'react';
import './Keyboard.css';
import Buttons from '../Buttons'
import Mathoperator from '../Mathoperator'
import Operators from '../Operators';

class Keyboard extends React.Component{
    state = {
        number: 0,
        mathOperator: "",
        operator: ""
    }
    setMath =(resivedValue)=> {
        this.setState({mathOperator:resivedValue},
        ()=>{this.props.sendValue(this.state.mathOperator)})
    }
    setDigital = (resivedValue)=> {
        this.setState({number:resivedValue},
        ()=>{this.props.sendValue(this.state.number)})
    }
    setOperator = (resivedValue)=> {
        this.setState({operator:resivedValue},
            ()=>{this.props.sendValue(this.state.operator)})
    }
    render(){
        return(
            <div className='keyboard'>
                <div>
                  <Mathoperator mathValue={this.setMath}/>
                  <Buttons  buttonValue={this.setDigital}/>
                </div>
                <Operators  operatorsValue={this.setOperator}/>
            </div>
        )
    }
}

export default Keyboard;
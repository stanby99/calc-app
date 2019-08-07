import React from 'react';
import './Keyboard.css';
import Button from '../Button'
import Mathoperator from '../Mathoperator'
import Operators from '../Operators';

class Keyboard extends React.Component{
    state = {
        number: 0,
        mathOperator: "",
        operator: ""
    }
    inputMath =(resivedValue)=> {
        this.setState({mathOperator:resivedValue},
        ()=>{this.props.sendValue(this.state.mathOperator)})
    }
    inputDigital =(resivedValue)=> {
        this.setState({number:resivedValue},
        ()=>{this.props.sendValue(this.state.number)})
    }
    inputOp =(resivedValue)=> {
        this.setState({operator:resivedValue},
            ()=>{this.props.sendValue(this.state.operator)})
    }

    render(){
        return(
            <div className='keyboard'>
                <div>
                  <Mathoperator mathValue={this.inputMath}/>
                  <Button  buttonValue={this.inputDigital}/>
                </div>
                <Operators  operatorsValue={this.inputOp}/>
            </div>
        )
    }
}

export default Keyboard;
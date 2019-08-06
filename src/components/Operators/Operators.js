import React from 'react';
import './Operators.css';

class Operators extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        };
    }
    inputOp(val) {
        console.log(val)
    }
   
    render(){
        return(
            <div>
                <button onClick={() => this.inputOp('/')} className='operators'>÷</button>
                <button onClick={() => this.inputOp('*')} className='operators'>×</button>
                <button onClick={() => this.inputOp('-')} className='operators'>-</button>
                <button onClick={() => this.inputOp('+')} className='operators'>+</button>
                <button onClick={() => this.inputOp("=")} className='operators'>=</button>
            </div>
        )
    }
}

export default Operators;
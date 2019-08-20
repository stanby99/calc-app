import React from 'react';
import './Operators.css';

class Operators extends React.Component{
   
    render(){
        return(
            <div>
                <button onClick={() => this.props.operatorsValue('/')} className='operators'>÷</button>
                <button onClick={() => this.props.operatorsValue('*')} className='operators'>×</button>
                <button onClick={() => this.props.operatorsValue('-')} className='operators'>-</button>
                <button onClick={() => this.props.operatorsValue('+')} className='operators'>+</button>
                <button onClick={() => this.props.operatorsValue("=")} className='operators'>=</button>
            </div>
        )
    }
}

export default Operators;
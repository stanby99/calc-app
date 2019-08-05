import React from 'react';
import './Operators.css';

// const button =props => <div>{props.children}</div>;
class Operators extends React.Component{
    render(){
        return(
            <div>
                <button className='operators'>÷</button>
                <button className='operators'>×</button>
                <button className='operators'>-</button>
                <button className='operators'>+</button>
                <button className='operators'>=</button>
            </div>
        )
    }
}

export default Operators;
import React from 'react';
import './Keyboard.css';
import Button from '../Button'
import Mathoperator from '../Mathoperator'
import Operators from '../Operators';

// const button =props => <div>{props.children}</div>;
class Keyboard extends React.Component{
    render(){
        return(
            <div className='keyboard'>
            <div>
                <Mathoperator/>
                <Button/>
            </div>
            <Operators/>
            </div>
        )
    }
}

export default Keyboard;
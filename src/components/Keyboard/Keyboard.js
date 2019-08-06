import React from 'react';
import './Keyboard.css';
import Button from '../Button'
import Mathoperator from '../Mathoperator'
import Operators from '../Operators';

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
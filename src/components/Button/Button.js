import React from 'react';

import './Button.css';


class Button extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        };
        
    }
     inputDigital(val) {
        console.log(val)
        
    }
    
    render(){
        return(
            <div>
                <div className='buttonrow'>
                    <button onClick={() => this.props.buttonValue(7)} className='button'>7</button>
                    <button onClick={() => this.props.buttonValue(8)} className='button'>8</button>
                    <button onClick={() => this.props.buttonValue(9)} className='button'>9</button>
                </div>
                <div className='buttonrow'>
                    <button onClick={() => this.props.buttonValue(4)} className='button'>4</button>
                    <button onClick={() => this.props.buttonValue(5)} className='button'>5</button>
                    <button onClick={() => this.props.buttonValue(6)} className='button'>6</button>
                </div>
                <div className='buttonrow'>
                    <button onClick={() => this.props.buttonValue(1)} className='button'>1</button>
                    <button onClick={() => this.props.buttonValue(2)} className='button'>2</button>
                    <button onClick={() => this.props.buttonValue(3)} className='button'>3</button>
                </div>
                <div className='buttonrow'>
                    <button onClick={() => this.props.buttonValue(0)} className='button'id='zero'>0</button>
                    <button onClick={() => this.props.buttonValue('.')} className='button'>.</button>
                </div>
            </div>
        )
    }
}

export default Button;
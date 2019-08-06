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
                    <button onClick={() => this.inputDigital(7)} className='button'>7</button>
                    <button onClick={() => this.inputDigital(8)} className='button'>8</button>
                    <button onClick={() => this.inputDigital(9)} className='button'>9</button>
                </div>
                <div className='buttonrow'>
                    <button onClick={() => this.inputDigital(4)} className='button'>4</button>
                    <button onClick={() => this.inputDigital(5)} className='button'>5</button>
                    <button onClick={() => this.inputDigital(6)} className='button'>6</button>
                </div>
                <div className='buttonrow'>
                    <button onClick={() => this.inputDigital(1)} className='button'>1</button>
                    <button onClick={() => this.inputDigital(2)} className='button'>2</button>
                    <button onClick={() => this.inputDigital(3)} className='button'>3</button>
                </div>
                <div className='buttonrow'>
                    <button onClick={() => this.inputDigital(0)} className='button'id='zero'>0</button>
                    <button onClick={() => this.inputDigital(',')} className='button'>.</button>
                </div>
            </div>
        )
    }
}

export default Button;
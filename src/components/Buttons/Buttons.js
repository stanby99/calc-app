import React from 'react';
import './Buttons.css';

class Buttons extends React.Component{
   
    
    onButtonClick = ({ nativeEvent }) => {
        const buttonNumber = nativeEvent.target.innerHTML
        this.props.buttonValue(Number(buttonNumber))
     }
    render(){
        return(
            <div>
                <div className='buttonrow'>
                    <button onClick={this.onButtonClick} className='button'>7</button>
                    <button onClick={this.onButtonClick} className='button'>8</button>
                    <button onClick={this.onButtonClick} className='button'>9</button>
                </div>
                <div className='buttonrow'>
                    <button onClick={this.onButtonClick} className='button'>4</button>
                    <button onClick={this.onButtonClick} className='button'>5</button>
                    <button onClick={this.onButtonClick} className='button'>6</button>
                </div>
                <div className='buttonrow'>
                    <button onClick={this.onButtonClick} className='button'>1</button>
                    <button onClick={this.onButtonClick} className='button'>2</button>
                    <button onClick={this.onButtonClick} className='button'>3</button>
                </div>
                <div className='buttonrow'>
                    <button onClick={this.onButtonClick} className='button'id='zero'>0</button>
                    <button onClick={this.onButtonClick} className='button'>.</button>
                </div>
            </div>
        )
    }
}

export default Buttons;
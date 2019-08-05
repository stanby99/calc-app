import React from 'react';
import './Button.css';

// const button =props => <div>{props.children}</div>;
class Button extends React.Component{
    render(){
        return(
            <div>
                <div className='buttonrow'>
                    <button className='button'>7</button>
                    <button className='button'>8</button>
                    <button className='button'>9</button>
                </div>
                <div className='buttonrow'>
                    <button className='button'>4</button>
                    <button className='button'>5</button>
                    <button className='button'>6</button>
                </div>
                <div className='buttonrow'>
                    <button className='button'>1</button>
                    <button className='button'>2</button>
                    <button className='button'>3</button>
                </div>
                <div className='buttonrow'>
                    <button className='button'id='zero'>0</button>
                    <button className='button'>.</button>
                </div>
            </div>
        )
    }
}

export default Button;
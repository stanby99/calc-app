import React from 'react';
import './Mathoperator.css';

class Mathoperator extends React.Component{
    
    render(){
        return(
            <div>
                <button onClick={() => this.props.mathValue('Clean')} className='mathoperator'>C</button>
                <button onClick={() => this.props.mathValue('Sign')}className='mathoperator'>±</button>
                <button onClick={() => this.props.mathValue("InputPercent")} className='mathoperator'>%</button>
            </div>
        )
    }
}

export default Mathoperator;
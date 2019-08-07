import React from 'react';
import './Mathoperator.css';

class Mathoperator extends React.Component{
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     };
    // }
    inputMath(val) {
        console.log(val)
    }
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
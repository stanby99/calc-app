import React from 'react';
import './Mathoperator.css';

// const button =props => <div>{props.children}</div>;
class Mathoperator extends React.Component{
    render(){
        return(
            <div>
                <button className='mathoperator'>C</button>
                <button className='mathoperator'>±</button>
                <button className='mathoperator'>%</button>
            </div>
        )
    }
}

export default Mathoperator;
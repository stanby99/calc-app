import React from 'react';
import './Body.css';
import Keyboard from '../Keyboard'


// const button =props => <div>{props.children}</div>;
class Body extends React.Component{
    render(){
        return(
            <div>
                <Keyboard/>
            </div>
        )
    }
}

export default Body;
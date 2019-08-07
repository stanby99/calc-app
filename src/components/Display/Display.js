import React from 'react';
import './Display.css';
import { Textfit } from 'react-textfit';


class Display extends React.Component{

    render(){
        let breakdown = this.props.value
        breakdown = breakdown.toLocaleString()
        return(
            <Textfit className='display' mode="multi">{breakdown}</Textfit>      
        )
    }
}

export default Display;
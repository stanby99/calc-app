import React from 'react';
import './Display.css';
import { Textfit } from 'react-textfit';

class Display extends React.Component{
    render(){
        const { value } = this.props
        return(
            <Textfit className='display' mode="multi">{value.toLocaleString()}</Textfit>      
        )
    }
}

export default Display;
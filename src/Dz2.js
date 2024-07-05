import { Component, useState } from "react";

export class Dz2 extends Component{
    constructor(props) {
        super(props);
        this.state = {color: this.props.vals[0]}
    }
    render(){
        const changeColor = (color) => {
            this.setState({color: color})
        }
    
        return (
            <>
                {
                     this.props.vals.map(function(color, index){
                        return <button key={index} style={{color: color.font, backgroundColor: color.back, padding: '10px'}} onClick={() => changeColor(color)}>Text</button>
                    })
                }

                <br></br><div style={{color: this.state.color.font, backgroundColor: this.state.color.back, padding: '10px', display: 'inline-block'}}>Some text</div>
            </>
        ) 
    }
}
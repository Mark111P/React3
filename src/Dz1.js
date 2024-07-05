import { useState } from "react";

export function Dz1(props){
    const colors = props.vals;
    const [color, setColor] = useState(colors[0]);

    const changeColor = (color) => {
        setColor(color);
    }
    
    return (
        <>
            {
                colors.map(function(color, index){
                    return <button key={index} style={{color: color.font, backgroundColor: color.back, padding: '10px'}} onClick={() => changeColor(color)}>Text</button>
                })
            }
            
            <br></br><div style={{color: color.font, backgroundColor: color.back, padding: '10px', display: 'inline-block'}}>Some text</div>
        </>
    )
}
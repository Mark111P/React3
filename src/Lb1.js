import { useState } from "react";

export function Lb1(props){
    const [counterVal, setCounterVal] = useState(0);
    const addCount = (x) => {
        setCounterVal(counterVal + x);
    }
    const bStyle = {margin: '10px', padding: '10px', fontWeight: 'bold'}
    const tStyle = {margin: '10px'}
    const bCount = props.vals;
    return (
        <>
            {
                bCount.map(function(x, index){
                    return <button key={index} style={bStyle} onClick={() => addCount(parseInt(x))}>{x}</button>
                })
            }
            
            <div style={tStyle}>{counterVal}</div>
        </>
    ) 
}
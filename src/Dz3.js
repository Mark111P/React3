import { useState } from "react";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function Dz3(){
    const texts = ['Text1', 'Info2', 'About3'];

    const [text, setText] = useState('-');

    const changeText = () => {
        setText(texts[getRandomInt(texts.length)]);
    }

    return(
        <>
            <button style={{margin: '10px', padding: '10px'}} onClick={changeText}>Random text</button>
            <div style={{margin: '10px'}}>{text}</div>
        </>
    )
}
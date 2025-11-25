import './ColorBox.css'
import { useState } from 'react';

export default function Color({colors}){
    const [color, setColor] = useState(colors);

    function changeColor(){
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(newColor)
    }
    return (
        <>
        <button 
        className="box"
        style = {{backgroundColor : color}}
        onClick = {changeColor}>
        </button>
        </>
    )
}
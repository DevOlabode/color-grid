import './ColorBox.css';
import { useState } from 'react';

export default function ColorBox({colors}){
    const [color, setColor] = useState(colors[0]);

    function changeColor(){
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(newColor)
    }

    return (
        <>
        <button       
        className="box"
        style={{ backgroundColor: color }}
        onClick={changeColor}>
      </button>
        </>
    )
}

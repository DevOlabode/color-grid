import './ColorBox.css'
import { useState } from 'react';

export default function Color({colors}){
    const [color, setColor] = useState(colors);

    function changeColor(){
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        console.log(newColor);

        setColor(newColor)
    }
    return (
        <>
        <button className="box"></button>
        </>
    )
}
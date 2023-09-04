import { useState } from "react"
import "./pointerMove.css";

export default function PointerMove() {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState('red')


    function handlePointerMove(e) {
        setPosition({ x: e.clientX, y: e.clientY })
    }
    function changeColor() {
        /* set */
    }

    return (
        <div className="pointer-area" onPointerMove={handlePointerMove}>

        </div>
    )
}
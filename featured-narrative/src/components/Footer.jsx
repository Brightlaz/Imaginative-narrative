import React from "react";
import shape from "../assets/img/shape.svg"
export default function Footer() {
    const imagine = 'Imaginative Narrative';
    return ( 
        <footer>
            <div className="box1">
                <div className="box">
                    <div className="box-face back"><img src={shape} alt="" /></div>
                    <div className="box-face front"><img src={shape} alt="" /></div>
                    <div className="box-face left"><img src="#" alt="" /></div>
                    <div className="box-face right"><img src="#" alt="" /></div>
                    <div className="box-face top"></div>
                    <div className="box-face bottom"></div>
                </div>
            </div>
            <div className="scroll text">
                <div className="foot1">
                    <h2 className="imagine">{imagine}</h2>
                </div>
                <div className="foot2">
                    <h2 className="imagine">{imagine}</h2>
                </div>
            </div>
        </footer>
    )
}
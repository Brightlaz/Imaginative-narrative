import React from "react";
import shape from "../assets/img/shape.svg"
export default function Footer() {
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
            <div className="text">
                Imaginative Narrative
            </div>
        </footer>
    )
}
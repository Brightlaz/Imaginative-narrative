import React from "react";
import image from "../assets/img/small.svg"
export default function Navbar() {
    return ( 
    <header>
        <div className="img">
            <img src={image} alt="" />
            </div>
        <div className="scroll">
            <div className="linear">
                <h2>Images are broken please use your imagination. Imaginative Narrative.</h2>
            </div>
            <div className="follow-up">
                <h2>Images are broken please use your imagination. Imaginative Narrative</h2>
            </div>
        </div>
    </header>
    )
}
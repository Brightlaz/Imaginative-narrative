import React from "react";
import image from "../assets/img/small.svg"
export default function Navbar() {
    return ( 
    <header>
        <div class="img">
            <img src={image} alt="" />
            </div>
        <div class="scroll">
            <div class="linear">
                <h2>Images are broken please use your imagination. Imaginative Narrative.</h2>
            </div>
            <div class="follow-up">
                <h2>Images are broken please use your imagination. Imaginative Narrative</h2>
            </div>
        </div>
    </header>
    )
}
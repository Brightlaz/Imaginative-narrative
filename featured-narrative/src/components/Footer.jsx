import React from "react";
import shape from "../assets/img/shape.svg"
export default function Footer() {
    return ( 
        <footer>
            <div class="box1">
                <div class="box">
                    <div class="box-face back"><img src={shape} alt="" /></div>
                    <div class="box-face front"><img src={shape} alt="" /></div>
                    <div class="box-face left"><img src="#" alt="" /></div>
                    <div class="box-face right"><img src="#" alt="" /></div>
                    <div class="box-face top"></div>
                    <div class="box-face bottom"></div>
                </div>
            </div>
            <div class="text">
                Imaginative Narrative
            </div>
        </footer>
    )
}
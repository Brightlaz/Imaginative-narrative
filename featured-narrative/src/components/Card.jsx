import React from "react";
import image from "../assets/img/small.svg"
import { Link } from "react-router-dom";

export default function Card(props) {
    console.log(props)
    return ( 
        <div class="card">
                <div class="inner">
                    <img src={image} alt="image" />
                    <p>{props.item.narrative}</p>
                </div>
                <div class="full">
                    <Link to={props.item.href}>Read full Narrative</Link>
                </div>
        </div>
    )
}
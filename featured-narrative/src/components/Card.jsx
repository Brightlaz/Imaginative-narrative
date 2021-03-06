import React from "react";
import image from "../assets/img/small.svg"
import { Link } from "react-router-dom";

export default function Card(props) {
    return ( 
        <div className="card">
                <div className="inner">
                    
                    <p><span><img src={image} alt="image" /></span>{props.item.narrative}</p>
                </div>
                <div className="full">
                    <Link to={props.item.href}>Read full Narrative</Link>
                </div>
        </div>
    )
}
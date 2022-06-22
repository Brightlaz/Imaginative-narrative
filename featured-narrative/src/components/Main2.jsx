import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/img/small.svg"
export default function Main2(props) {
    return ( 
        <main className="home">
        <div className="inner head">
                    <img src={image} alt="icon" />
                    <h1>{props.nar}</h1>
        </div>
        <div className="container2">
            <div>
                <p>
                    {props.info}
                    <br />
                    <br />
                    {props.info2 && <p>{props.info2} <br /> <br /></p>} 
                    Feel free to <Link to="/featuredNarrative">Create your Narrative</Link> share it even stick it on pleaces you love.
                    <br />
                    <br />
                    See <Link to="/featuredNarrative">Feautured Narrative.</Link>
                </p>
            </div>
        </div>
    </main>
    )
}
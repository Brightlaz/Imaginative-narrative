import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/img/small.svg"
export default function Main2(props) {
    return ( 
        <main className="home">
        <div className="head">
            <h1>
                <div><sup id="small"><img src={image} alt="icon" /></sup>{props.nar}</div>

            </h1>
            {props.link &&  <div className = "home-link" >
              <Link to = {props.link} > Go back to home </Link> 
            </div>}
        </div>
        <div className="container2">
            <div>
                <p>
                    {props.info}
                    <br />
                    <br />
                    {props.info2 && <>{props.info2} <br /> <br /></>} 
                    Feel free to <Link to="/CreateNarrative">Create your Narrative</Link> share it even stick it on pleaces you love.
                    <br />
                    <br />
                    See <Link to="/featuredNarrative">Feautured Narrative.</Link>
                </p>
            </div>
        </div>
    </main>
    )
}
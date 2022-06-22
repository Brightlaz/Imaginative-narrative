import React from "react";
import Card from "./Card";
import data from "../data";
import { Link, useParams } from "react-router-dom";
export default function Main() {
    const happy = ':)'
    const card = data.map(item => {
        return (
            <Card 
            key={item.id}
            item={item}
            />
        )
    })
    return ( 
        <main>
        <h1>Below we have our feautured Narrative from </h1>
        <div className="home-link">
        <Link to="/">Go back to home</Link>
        </div>
        <section >
            {card}
        </section>
        <div className="container">
            <div className="about">
                <p>
                    What we wanted to achieve through this project was to find ideas we can use to unit peoples unique experiences on matters they have seen, heard, or thought about. Things that they worry about and of course the ones that make them laugh {happy}.
                    <br />
                    <br />
                    Feel free to <Link to="/featuredNarrative">Create your Narrative,</Link> share it even stick it on pleaces you love.
                    <br />
                    <br />
                    See <Link to="/featuredNarrative">Feautured Narrative.</Link>
                </p>
            </div>
        </div>
    </main>
    )
}
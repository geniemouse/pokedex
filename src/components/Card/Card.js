import React from "react";

import CardFront from "./CardFront/CardFront";
import CardBack from "./CardBack/CardBack";
import "./Card.css";

function Card(props) {
    const { id, img, name, type } = props;
    return (
        <article id={`pokemon-${name}`} className="card">
            <div className="card-flip">
                <CardFront id={id} img={img} name={name} type={type} />
                <CardBack />
            </div>
        </article>
    );
}

export default Card;

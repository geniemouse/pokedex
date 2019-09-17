import React, { useState } from "react";

import CardFront from "./CardFront/CardFront";
import CardBack from "./CardBack/CardBack";
import "./Card.css";

function Card(props) {
    const { id, img, height, name, next_evolution, type, weaknesses, weight } = props;
    const [isFrontCard, setCardState] = useState(true);
    let cardStateCss = "card card--showfront";

    if (!isFrontCard) {
        cardStateCss = "card card--showback";
    }

    return (
        <article id={`pokemon-${name}`} className={cardStateCss}>
            <div className="card-flip">
                <CardFront id={id} img={img} name={name} type={type} />
                <CardBack
                    height={height}
                    id={id}
                    name={name}
                    next_evolution={next_evolution}
                    weaknesses={weaknesses}
                    weight={weight}
                />
            </div>

            <button className="flipcard-toggle" onClick={() => setCardState((prevState) => !prevState)}>
                <span className="visually-hidden">Flip {name} card</span>
            </button>
        </article>
    );
}

export default Card;

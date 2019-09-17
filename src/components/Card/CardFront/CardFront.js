import React from "react";
import Figure from "../../UI/Figure/Figure";
import "./CardFront.css";

function CardFront(props) {
    const { id, img, name } = props;
    return (
        <div className="face face--front">
            <header>
                <Figure src={img} width="120" height="120" />
                <h2>
                    <span className="pokemon-id">#{id}</span> {name}
                </h2>
            </header>

            <p>Pokemon type...</p>
        </div>
    );
}

export default CardFront;

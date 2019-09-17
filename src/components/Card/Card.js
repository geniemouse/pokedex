import React from "react";
import "./Card.css";

function Card(props) {
    const { id, name } = props;
    return (
        <article id={`pokemon-${name}`} className="card">
            <div className="card-flip">
                <h2>
                    <span className="pokemon-id">#{id}</span> {name}
                </h2>

                <p>Card front...</p>
                <p>Card back...</p>
            </div>
        </article>
    );
}

export default Card;

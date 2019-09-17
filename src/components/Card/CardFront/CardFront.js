import React from "react";
import Figure from "../../UI/Figure/Figure";
import PokemonTypesList from "../../Pokemon/PokemonTypesList/PokemonTypesList";
import "./CardFront.css";

function CardFront(props) {
    const { id, img, name, type } = props;
    return (
        <div className="face face--front">
            <header>
                <Figure src={img} width="120" height="120" />
                <h2>
                    <span className="pokemon-id">#{id}</span> {name}
                </h2>
            </header>

            <PokemonTypesList types={type}>
                <h3 className="visually-hidden">Pokémon type</h3>
            </PokemonTypesList>
        </div>
    );
}

export default CardFront;

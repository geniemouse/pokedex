import React, { Fragment } from "react";
import Card from "../Card/Card";
import "./PokedexList.css";

function PokedexList(props) {
    const { pokemon = [] } = props;

    const messageOutput = <p className="pokedex-message">Searching for Pokémon...</p>;

    const outputList = (
        <ul className="pokedex-list">
            {pokemon.map((p) => (
                <li key={p.id}>
                    <Card {...p} />
                </li>
            ))}
        </ul>
    );

    return <Fragment>{pokemon.length ? outputList : messageOutput}</Fragment>;
}

export default PokedexList;

import React, { Fragment } from "react";
import "./PokemonEvolutionsList.css";

function PokemonEvolutionsList(props) {
    const { children, evolutions = [] } = props;

    return (
        <Fragment>
            {children}
            {evolutions.length ? (
                <ol className="pokemon-evolutions-list">
                    {evolutions.map((evolution) => {
                        const name = evolution.name;
                        return <li key={name}>{name}</li>;
                    })}
                </ol>
            ) : (
                "None"
            )}
        </Fragment>
    );
}

export default PokemonEvolutionsList;

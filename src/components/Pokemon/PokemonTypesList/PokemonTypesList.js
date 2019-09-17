import React, { Fragment } from "react";
import "./PokemonTypesList.css";

function PokemonTypesList(props) {
    const { children, types = [] } = props;

    function getTypeCss(type) {
        const normalizedText = String(type)
            .replace(/\s/gi, "-")
            .toLowerCase();
        return `type--${normalizedText}`;
    }

    return (
        <Fragment>
            {children}
            {types.length ? (
                <ul className="pokemon-types-list">
                    {types.map((type) => (
                        <li key={type} className={getTypeCss(type)}>
                            {type}
                        </li>
                    ))}
                </ul>
            ) : null}
        </Fragment>
    );
}

export default PokemonTypesList;

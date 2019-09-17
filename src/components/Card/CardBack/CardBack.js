import React from "react";
import PokemonEvolutionsList from "../../Pokemon/PokemonEvolutionsList/PokemonEvolutionsList";
import PokemonTypesList from "../../Pokemon/PokemonTypesList/PokemonTypesList";
import "./CardBack.css";

function CardBack(props) {
    const { height = "-", name, next_evolution = [], weaknesses = [], weight = "" } = props;
    return (
        <div className="face face--back">
            <table className="pokemon-specs">
                <caption>{name} statistics</caption>
                <tbody>
                    <tr>
                        <th scope="row">Height</th>
                        <td>{height}</td>
                    </tr>
                    <tr>
                        <th scope="row">Weight</th>
                        <td>{weight}</td>
                    </tr>
                    <tr>
                        <th scope="row">Weaknesses</th>
                        <td>
                            <PokemonTypesList types={weaknesses} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Next evolution</th>
                        <td>
                            <PokemonEvolutionsList evolutions={next_evolution} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CardBack;

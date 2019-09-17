import React, { Fragment } from "react";
import useFetch from "../../hooks/useFetch";
import "./App.css";

function useFetchPokemon() {
    const result = useFetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", {});

    if (result.pokemon) {
        // Sort in-place by name (A-Z)
        // @note: Not keeping the original order, as this is not part of the requirements
        return result.pokemon.sort((a, b) => {
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();

            if (aName > bName) {
                return 1;
            } else if (aName < bName) {
                return -1;
            }

            // (Edge-case) Names are the same
            return 0;
        });
    }

    return [];
}

function App() {
    const pokemon = useFetchPokemon();
    return (
        <Fragment>
            <a className="skip-link" href="#main">
                Skip to main content
            </a>

            <header>
                <h1>A Pokémon Pokédex</h1>
            </header>

            <main id="main">
                {pokemon && pokemon.length ? (
                    <ul>
                        {pokemon.map((p) => (
                            <li key={p.id}>{p.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Searching for Pokémon...</p>
                )}
            </main>
        </Fragment>
    );
}

export default App;

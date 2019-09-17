import React, { Fragment } from "react";
import "./App.css";

function App() {
    return (
        <Fragment>
            <a className="skip-link" href="#main">
                Skip to main content
            </a>

            <header>
                <h1>A Pokémon Pokédex</h1>
            </header>

            <main id="main">
                <p>Content...</p>
            </main>
        </Fragment>
    );
}

export default App;

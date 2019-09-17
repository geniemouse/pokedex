import React, { Fragment } from "react";
import "./Figure.css";

function Figure(props) {
    const { alt = "", caption = "", height, src = "", width } = props;
    return (
        <Fragment>
            {src.length ? (
                <figure className="pokemon-figure">
                    <img width={width} height={height} src={src} alt={alt} />
                    {caption.length ? <figcaption>{caption}</figcaption> : null}
                </figure>
            ) : null}
        </Fragment>
    );
}

export default Figure;

import React, { Fragment } from "react";
import "./Figure.css";

function Figure(props) {
    const { alt = "", caption = "", forceHttps, height, src = "", width } = props;
    let imgSrc = src;

    if (forceHttps) {
        imgSrc = imgSrc.replace(/^http:/, "https:");
    }

    return (
        <Fragment>
            {src.length ? (
                <figure className="pokemon-figure">
                    <img width={width} height={height} src={imgSrc} alt={alt} />
                    {caption.length ? <figcaption>{caption}</figcaption> : null}
                </figure>
            ) : null}
        </Fragment>
    );
}

export default Figure;

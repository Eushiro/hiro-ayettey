import React from 'react';
import { Helmet } from "react-helmet"

function MetaTags(pageTitle) {
    return (
        <Helmet>
            <meta charSet="utf-8" name="description" content="Hi I'm Hiro, a Software Engineering student at the University of Waterloo. 
          This is my personal website describing some of the places I've worked at and projects I've made"
            />
            <title>Hiro Ayettey - {pageTitle}</title>
        </Helmet>
    );
}

export default MetaTags 

import React from 'react';
import { Helmet } from "react-helmet"
import profile from "../images/profile.webp"

function MetaTags(pageTitle, url) {
  var title = "Hiro Ayettey - " + pageTitle
  var description = `Hi I'm Hiro, a Software Engineering student at the University of Waterloo. 
  This is my personal website describing some of my work experience and projects.`
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" name="description" content={description}
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={profile} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

export default MetaTags 

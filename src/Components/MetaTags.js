import React from 'react';
import { Helmet } from "react-helmet"
import profile from "../images/profile.webp"

function MetaTags(pageTitle, url) {
  var title = "Hiro Ayettey - " + pageTitle
  var description = "Hi I'm Hiro, a Software Engineering student at the University of Waterloo. This is my personal website describing some of my work experience and projects."
  return (
    <Helmet>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Google / Search Engine Tags */}
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={profile} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={profile} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={profile} />
    </Helmet>
  );
}

export default MetaTags 

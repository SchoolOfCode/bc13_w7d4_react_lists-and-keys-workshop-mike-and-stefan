import React from "react";

import "./index.css";

function Post({ title, date, author, text, highlights, image }) {
  return (
    <article>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <img src={image.link} alt={image.alt} width={"50%"}></img>
      <h3>{author}</h3>
      <p>{text}</p>
      {highlights.map((highlight, index) => (
        <li key={index}>{highlight}</li>
      ))}
    </article>
  );
}

export default Post;

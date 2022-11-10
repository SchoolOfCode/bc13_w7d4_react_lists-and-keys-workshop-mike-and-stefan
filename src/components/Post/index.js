import React from "react";

import "./index.css";

function Post({ title, date, author, text, hightlights, image }) {
  return (
    <article>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <img src={image.link} alt={image.alt} width={"50%"}></img>
      <h3>{author}</h3>
      <p>{text}</p>
    </article>
  );
}

export default Post;

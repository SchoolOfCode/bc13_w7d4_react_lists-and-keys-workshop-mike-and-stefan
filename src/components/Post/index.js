import React from "react";

import "./index.css";

function Post({ title, date, author, text, hightlights, image }) {
  return (
    <article>
      title={title}
      date={date}
      author={author}
      text={text}
    </article>
  );
}

export default Post;

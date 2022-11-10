import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <main id="main">
      {/* using the keys of the object as a param by destructuring to have neater code */}
      {posts.map(({ postId, title, date, author, text, highlights, image }) => (
        <Post
          key={postId}
          title={title}
          date={date}
          author={author}
          text={text}
          highlights={highlights}
          image={image}
        />
      ))}
    </main>
  );
}

export default Main;

// goal is to loop over postState with a .map
// for each visit of the array indexes ensure componant is rendered.
// THINGS LEFT.☑️
// Make the image work.☑️
//Make the highlights work with a map.☑️
//

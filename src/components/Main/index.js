import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
   {posts.map(({...posts})=>{
    console.log(posts.title + "Post data")
    return <Post key={posts.postId} title={posts.title} />
   })}

    
  </main>;
  
}

export default Main;


// goal is to loop over postState with a .map
// for each visit of the array indexes ensure componant is rendered.
// 
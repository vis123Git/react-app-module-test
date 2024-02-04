// src/components/DetailPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams(); // This hook allows us to extract the id param from the URL.
  const posts = useSelector(state => state.posts.posts); 
  console.log("posts===",posts);
  const post = posts.find(p => p.id.toString() === id); 

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">Back to Home</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Random" />
    </div>
  );
};

export default DetailPage;

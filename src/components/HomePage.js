import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/posts";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  console.log("loading, posts, error===",loading, posts, error);
  return (
    <div>
      {Array.isArray(posts) && posts.map(post => (
        <div key={post.id}>
          <Link to={`/item/${post.id}`}>
            <h2>{post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}</h2>
          </Link>
          <p>{post.body.length > 100 ? post.body.substring(0, 100) + '... Read More' : post.body}</p>
        </div>
      ))}
    </div>
  );
  
};

export default HomePage;

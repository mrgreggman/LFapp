import React, { useEffect, useContext, useState } from 'react';
import './Feed.css';
import FeedBox from '../FeedBox/FeedBox';
import axios from 'axios';
import PostCard from '../PostCard/PostCard';
import { useParams } from 'react-router-dom';

function Feed() {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [currentGame, setCurrentGame] = useState({});

  async function getPosts() {
    let result = await axios.get('http://localhost:5277/api/Posts');
    if (result.status === 200) {
      setPosts(await result.data);
    }
  }

  function onNewPost() {
    getPosts();
  }

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed_container">
        <FeedBox onNewPost={onNewPost} />
        <div className="posts_container">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;

import React, { useEffect, useContext, useState } from 'react';
import './Feed.css';
import FeedBox from './FeedBox';
import axios from 'axios';
import PostCard from './PostCard';
import { GameContext } from './context/GameContext';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [currentGame, setCurrentGame] = React.useState({});

  async function getPosts() {
    let result = await axios.get('https://localhost:7224/api/Posts')
    if (result.status === 200) {
      setPosts(await result.data)
    }

  }

  function onNewPost() {
    getPosts()
  }

  React.useEffect(() => {
    getPosts()
  }, [])

  return (
  <GameContext.provider 
    value={{
      currentGame,
      setCurrentGame}}>
    <div className="feed">
      <div className='feed_container'>
        <FeedBox
          onNewPost={onNewPost} />
        <div className='posts_container'>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
    </GameContext.provider>
  );
}

export default Feed;
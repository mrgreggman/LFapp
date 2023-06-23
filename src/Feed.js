import React, { useEffect, useState } from 'react';
import './Feed.css';
import FeedBox from './FeedBox';
import Post from './Post';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase'; // Assuming you have a separate 'firebase.js' file
import FlipMove from 'react-flip-move';
import SearchIcon from '@mui/icons-material/Search';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const postsData = snapshot.docs.map((doc) => doc.data());
      setPosts(postsData);
    },[]);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <SearchIcon className='widget_search' />
        <input textAlign={'center'} placeholder='search' type='text'   />
      </div>

      <FlipMove>
    <div className='posts_container'>
      <FeedBox />
      {posts.map((post) => (
        <Post
          key={post.id} 
          displayName={post.displayName}
          username={post.username}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
      </FlipMove>
    </div>
  );
}

export default Feed;

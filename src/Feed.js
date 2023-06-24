import React, { useEffect, useState } from 'react';
import './Feed.css';
import FeedBox from './FeedBox';
import Post from './Post';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase'; // Assuming you have a separate 'firebase.js' file
import FlipMove from 'react-flip-move';


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
      <FlipMove>
    <div className='feed_container'>
      <FeedBox />
    <div className='posts_container'>
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
    </div>
      </FlipMove>
    </div>
  );
}

export default Feed;

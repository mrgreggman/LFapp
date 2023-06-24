import React, { useEffect, useState } from 'react';
import './FeedBox.css';
import { Button } from '@mui/material';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import imgIcon from '@mui/icons-material/PhotoSizeSelectActualRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GifIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';

function FeedBox(props) {
  const [postMessage, setPostMessage] = useState('');
  const [postImage, setPostImage] = useState('');
  const [isPostButtonEnabled, setIsPostButtonEnabled] = useState(false);


  useEffect(() => {
    if (postMessage.length > 1) {
      setIsPostButtonEnabled(true)
    } else {
      setIsPostButtonEnabled(false)
      
    }

  },[postMessage]);    

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'posts'), {
        displayName: 'Test User',
        username: 'testuser',
        text: postMessage,
        image: postImage,
        avatar: '',
      });

      setPostMessage('');
      setPostImage('');
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  };

  return (
    <div className='feedbox'>
    <div className='feedbox_input'>
      <form className='feedbox_post'onSubmit={sendPost}>
      <TextField
          fullWidth
          id="outlined-multiline-flexible"
          label="Post"
          multiline
          maxRows={4}
          type="text"
          placeholder="Enter post message"
          value={postMessage}
          onChange={(e) => setPostMessage(e.target.value)}>
          </TextField>

          <Stack
          style={{marginTop:'0.5rem'}}
          direction="row" spacing={1}>

          <IconButton
          fontSize='large'
          aria-label="delete">
          <imgIcon />
          </IconButton>

          <IconButton
          fontSize='large'
          aria-label="delete">
          <VideoLibraryIcon />
          </IconButton>

          <IconButton
          fontSize='large'
          aria-label="delete">
          <GifIcon />
          </IconButton>

          <IconButton
          fontSize='large'
          aria-label="delete">
          <PollIcon />
          </IconButton>

          
          </Stack>
       { /* <input
          type="text"
          placeholder="Enter post image URL"
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
  /> */}
        <Button

        fullWidth
        type="submit"
        disabled={!isPostButtonEnabled}
        >Send Post
        </Button>
      </form>
    </div>
    </div>
  );
}



export default FeedBox;

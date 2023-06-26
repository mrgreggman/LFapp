import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import UploadIcon from '@mui/icons-material/PhotoSizeSelectActualRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GifIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import Imageholder from './Imageholder';
import { ImageRounded } from '@mui/icons-material';
import Previews from './DragDrop';
import './FeedBox.css';
import post from './PostCard';
import { GameContext } from './context/GameContext';

function FeedBox({ onNewPost }) {
  const [postMessage, setPostMessage] = useState('');
  const [isPostButtonEnabled, setIsPostButtonEnabled] = useState(false);
  const [image, setimage] = useState(null);
  const gameContext = useContext(GameContext);

  /* handles declining post */

  useEffect(() => {
    if (postMessage.length > 0 || image) {
      setIsPostButtonEnabled(true)
    } else {
      setIsPostButtonEnabled(false)

    }

  }, [postMessage]);



  /* handles text post */

  const sendPost = async (e) => {
    e.preventDefault();
    await axios.post('https://localhost:7224/api/Posts', { displayName: 'test', username: 'test', message: postMessage, postTime: new Date(), gameId:gameContext.game.gameId})
    onNewPost()
  };


  return (
    <div className='feedbox'>
      <div className='feedbox_input'>
        <form className='feedbox_post' onSubmit={sendPost}>
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            label="Post"
            multiline
            maxRows={4}
            type="text"
            image={image}
            placeholder="Enter post message"
            value={postMessage}
            onChange={(e) => {
              setPostMessage(e.target.value)
            }}
          >
          </TextField>

          <Previews />
          { /* <input
          type="text"
          placeholder="Enter post image URL"
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
  /> */}
          <Button style={{ marginTop: "0.5vh" }}
            variant='contained'
            fullWidth
            type="submit"
            disabled={!isPostButtonEnabled}
          >
            Send Post
          </Button>
        </form>
      </div>
    </div>
  );
}


export default FeedBox;

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Previews from '../DragDrop/DragDrop';
import './FeedBox.css';
import { GameContext } from '../../context/GameContext';


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

    await axios.post('http://localhost:5277/api/Posts', { displayName: 'test', username: 'test', message: postMessage, postTime: new Date(), gameId:null})
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

import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

  function Post({ displayName, username, text, image, avatar }) {
    return (
    <div className='post_container'>
      <div className='post'>
        <div className='post_avatar'>
          <Avatar src={avatar}></Avatar>
        </div>
        <div className='post_body'>
          <div className='post_header'>
            <div className='post_text'>
              <h3>
                {displayName}{' '}
                  <span className='post_username'>{'@'}{username}</span>
              </h3>
            </div>
            <div className='post_headerDescription'>
              <p>{text}</p>
            </div>
          </div>
            <img src={image} alt='' />
          <div className='post_footer'>
            <ChatBubbleOutlineIcon fontSize='small' />
            <ThumbUpIcon fontSize='small' />
            <ShareIcon fontSize='small' />
          </div>
       </div>
     </div>
   </div>  
  );
}

export default Post;

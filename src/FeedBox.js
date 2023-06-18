import React from 'react';
import './FeedBox.css';
import { Avatar, Button } from '@mui/material';

function FeedBox(props) {
    return (    
    <div className='feedBox'>
        <form>
            <div className='feedBox_input'>
                <Avatar src='https://cdn-icons-png.flaticon.com/512/6596/6596121.png'></Avatar>
                <input placeholder='Whats Happening?' />
            </div>
            <Button className='feed_button'>Post</Button>
        </form>
    </div>
    );
}

export default FeedBox;
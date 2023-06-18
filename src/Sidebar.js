import React from 'react';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import SidebarOption from './SidebarOption';
import './Sidebar.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import GamepadRoundedIcon from '@mui/icons-material/GamepadRounded';
import { Button } from '@mui/material';

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* icon */}
            <SportsEsportsRoundedIcon className='sidebar_icon' />
            {/* newsbarOption */}
            <SidebarOption active Icon={HomeRoundedIcon} text='Home'/>
            <SidebarOption Icon={CircleNotificationsRoundedIcon} text='Notifications'/>
            <SidebarOption Icon={GamepadRoundedIcon} text='LFG'/>
            <SidebarOption Icon={MarkEmailUnreadRoundedIcon} text='Messages'/>
            <SidebarOption Icon={AccountBoxRoundedIcon} text='Profile'/>
            {/* newsbarOption */}

            {/* Button > post */}
            <Button variant="contained" className='sidebar_post' fullWidth>Post</Button>
        </div>
    );
}

export default Sidebar;
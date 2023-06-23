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
        {/* <SportsEsportsRoundedIcon className='sidebar_icon' />
             icon */}
        <div className='sidebar_container'>
            {/* newsbarOption */}
            <SidebarOption logoPath='/gameLogos/Destiny2.svg' text='Destiny 2'/>
            <SidebarOption logoPath='/gameLogos/League.svg' text='League of Legends'/>
            <SidebarOption logoPath='/gameLogos/csgo.svg' text='CS:GO'/>
            <SidebarOption logoPath='/gameLogos/Dota2.svg' text='Dota 2'/>
            {/* newsbarOption */}

            {/* Button > post */}
        </div>
    </div>
    );
}

export default Sidebar;
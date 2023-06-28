import React from 'react';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import SidebarOption from './SidebarOption';
import './Sidebar.css'
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
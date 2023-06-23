import React from 'react';
import './SidebarOption.css';


function SidebarOption({active, text, logoPath}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption__active'}`}>
            <img src={logoPath} />
            <h2>{text}</h2>
            
        </div>
    );
}

export default SidebarOption;
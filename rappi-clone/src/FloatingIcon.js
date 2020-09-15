import React from 'react';
import './FloatingIcon.css';

function FloatingIcon({ iconUrl }) {
    return (
        <div className="floatingIcon">
            <img src={iconUrl} alt=""/>
        </div>
    )
}

export default FloatingIcon

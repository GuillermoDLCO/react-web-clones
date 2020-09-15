import React from 'react';
import './StoreType.css'

function StoreType({ imageUrl, name}) {
    return (
        <div className="storeType">
            <img src={imageUrl} alt=""/>
            <h2>{name}</h2>
        </div>
    )
}

export default StoreType

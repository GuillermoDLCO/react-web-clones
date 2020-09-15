import { Button } from '@material-ui/core';
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Banner.css';
import FloatingIcon from './FloatingIcon';

function Banner() {
    return (
        <div className="banner">
            <div className="banner__top">
                <div className="images__top">
                    <div className="top__firstIcon">
                        <FloatingIcon iconUrl="https://images.rappi.com/web/pharmacy@2x.png?e=webp" />
                    </div>
                    <div className="top__secondIcon">
                        <FloatingIcon iconUrl="https://images.rappi.com/web/sports@2x.png?e=webp" />
                    </div>
                </div>
                <h1>Pide en supermercados, restaurantes y mucho más.</h1>
            </div>
            <div className="banner__search">
                <div className="search__field">
                    <LocationOnIcon />
                    <input type="text" placeholder="Escribe tu dirección" />
                </div>
                <Button>
                    Buscar
                </Button>
            </div>
            <div className="more__icons">
                <div className="first__icon">
                    <FloatingIcon iconUrl="https://images.rappi.com/web/burguer@2x.png?e=webp" />
                </div>
                <div className="second__icon">
                    <FloatingIcon iconUrl="https://images.rappi.com/web/fashion@2x.png?e=webp" />
                </div>
                <div className="third__icon">
                    <FloatingIcon iconUrl="https://images.rappi.com/web/markets@2x.png?e=webp" />
                </div>
                <div className="fourth__icon">
                    <FloatingIcon iconUrl="https://images.rappi.com/web/mrs@2x.png?e=webp" />
                </div>
            </div>
        </div>
    )
}

export default Banner

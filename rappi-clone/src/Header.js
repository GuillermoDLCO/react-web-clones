import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <Link to='/'>
                    <img
                        className="header__icon"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0_l1sLsqM01ljSL8CRXQoYUJuBeBv-MuJ5g&usqp=CAU"
                        alt=""
                    />
                </Link>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Busca cualquier producto" />
                </div>
            </div>
            <div className='header__right'>
                <Button>
                    Ingresar
                </Button>
            </div>
        </div>
    )
}

export default Header

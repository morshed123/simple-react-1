import React from 'react';
import "./Header.css"
import logo from '../../../../src/images/board.png';

const Header = () => {
    
    return (
        <div className="Header">
            <img src={logo} alt="" />
            <h1>Auction 2021</h1>
            <nav>
                <a href="/Player">Player</a>
                <a href="/Buy">Buy</a>
                <a href="/manage">Manage  Your  Player</a>
            </nav>
        </div>
    );
};
export default Header;


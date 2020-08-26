import React from 'react';
import Logo from '../../assets/title/ultrablood.png';
import './Title.css';
import { Link } from 'react-router-dom'

function Title() {
    return (
        <nav className="Title">
            <Link to="/">
                <img className="Logo" src={Logo} alt="UltraBlood logo"/>
            </Link>
        </nav>
    )
}

export default Title;
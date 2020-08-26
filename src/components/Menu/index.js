import React from 'react';
import Artifacts from '../../assets/menu/artifacts.png';
import Skins from '../../assets/menu/skins.png';
import Titans from '../../assets/menu/titans.png';
import './Menu.css';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/artifacts">
                <img className="MenuItem" src={Artifacts} alt="Artifacts"/>
            </Link>
            <Link to="/">
                <img className="MenuItem" src={Skins} alt="Skins"/>
            </Link>
            <Link to="/">
                <img className="MenuItem" src={Titans} alt="Titans"/>
            </Link>
        </nav>
    )
}

export default Menu;
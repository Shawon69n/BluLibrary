import React from 'react';
import './Navbar.css'
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom';
import { Nav } from './Navbar.styles';
import { Title } from '../../GlobalStyles';
const Navbar = () => {
    return (
        <Nav>    
            <ul>
            <div className='links'>
                <img className='logo' src={logo} alt="" srcset="" />
                <Title mt='10px'>BluLiabrary</Title>
            </div>
                <div className='links'>
                <li><Link to="/booklist">Booklist</Link></li>
                <li><Link to="/your-request">Your Request</Link></li>
                <li><Link to="/login">Login</Link></li>
                </div>
                
            </ul>
        </Nav>

    );
};

export default Navbar;
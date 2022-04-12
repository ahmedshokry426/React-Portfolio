import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/'><h1>Home</h1></Link>
        </nav>
    );
}
export default Navbar
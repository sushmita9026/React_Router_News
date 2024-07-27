
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/india">India</Link>
            <Link to="/world">World</Link>

             {/* <Link to ="/About">About</Link>
            <Link to ="/Contect">Contect</Link>
            <Link to ="/">Home</Link>  */}
        </nav>
    );
};

export default Navbar;

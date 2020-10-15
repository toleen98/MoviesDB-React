import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../components/SearchInput'
import './Navbar.css';

const Navbar = () => {

    return (
        <>
            <nav className='Nav'>
               <Link to='/' className='nav-item left'>Movies<span>DB</span></Link>
               <div className='nav-item right' ><SearchInput/></div>
                
            </nav>

        </>
    )

}

export default Navbar;
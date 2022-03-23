import React, { useState } from 'react';
import NavLinks from './NavLinks';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';

const NavMobile = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);
 
    return (
        <nav className='nav-mobile'>
            {open ? <FaTimes className='open-menu' size='36px' onClick={()=> setOpen(!open)}/> : <FaBars className='open-menu' size='36px' onClick={()=> setOpen(!open)}/>}

            {open && <NavLinks isMobile={true} closeMenu={closeMenu} />}
        </nav>
    )
}

export default NavMobile;
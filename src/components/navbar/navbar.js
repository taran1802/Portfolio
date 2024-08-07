import React from 'react'
import'./navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'
const Navbar = ({ setActivePage }) => {
    const handleSetActivePage = (page) => {
        setActivePage(page);
    };

  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link className='desktopMenuListItem'onClick={() => handleSetActivePage('Home')}>Home</Link>
            <Link className='desktopMenuListItem'onClick={() => handleSetActivePage('Home')}>About</Link>
            <Link className='desktopMenuListItem'onClick={() => handleSetActivePage('Skills')}>Skills</Link>
            <Link className='desktopMenuListItem'onClick={() => handleSetActivePage('Projects')} >Projects</Link>
            <Link className='desktopMenuListItem'onClick={() => handleSetActivePage('Contact')} >Contact</Link>
        </div>
        
    </nav> 
  );
}


export default Navbar;

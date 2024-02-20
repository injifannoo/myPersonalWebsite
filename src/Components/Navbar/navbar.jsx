import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import logo from '../../../src/images/itu.jpg'
import contactImg from '../../../src/images/contact.png'
const Navbar=()=>{
    return(
    <nav className='navbar'> 
    <img src={logo} alt="Logo" className='logo' />
    <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={true} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={true}  className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={true}  className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='client' spy={true} smooth={true} offset={true}  className="desktopMenuListItem">Clients</Link> 
    </div>
    <button className="desktopMenuBtn" onClick={()=>{
document.getElementById('contact').scrollIntoView();
    }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
         </nav>
    )
}
export default Navbar
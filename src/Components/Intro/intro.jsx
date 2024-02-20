import React from "react";
import { Link } from 'react-scroll';
import './intro.css'
import profile from '../../../src/images/gada1.png'
const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className='hello'> Wel come,</span>
                <span className="introName"> I'm Injifannoo Taammiruu Urgeessaa.</span>
                <p className="introPara"> Skilled MERN stack developer,Flutter developer <br />
                    Passionate computer Science Student at AAU.</p>
                <Link activeClass='active' to='myContacts' spy={true} smooth={true} offset={true} ><button className="btn"> Contact me</button></Link>
            </div>

            <img src={profile} alt="profile" className="bg" />
        </section>
    );
}
export default Intro
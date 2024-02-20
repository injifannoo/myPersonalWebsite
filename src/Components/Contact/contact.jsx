import React, { useRef } from 'react'
import './contact.css'
import client1 from '../../images/health.jpg'
import fb from '../../images/icons/contact/facebook.png'
import tg from '../../images/icons/contact/tg.png'
import phone from '../../images/icons/contact/phone.png'
import email from '../../images/icons/contact/email.jpg'
import linkedin from '../../images/icons/contact/linkedin.png'
import github from '../../images/icons/contact/github.png'
import PointToBottom from '../../images/icons/contact/to bottom.png'
import emailjs from '@emailjs/browser';


const contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_wef1g2f', 'template_hlzy00b', form.current, {
                publicKey: 'nUCJ5A58UJvl-SaDn',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section className='contact'>
            <div className="client">
                <h1 className="clientTitle">My Clients</h1>
                <p className="clientDesc">My clients are below</p>
            </div>
            <div className="clientImgs">
                <img src={client1} alt="" className="clientImg" />
                <img src={client1} alt="" className="clientImg" />
                <img src={client1} alt="" className="clientImg" />
                <img src={client1} alt="" className="clientImg" />

            </div>

            <div id="contact">
                <h1 className="contactTitle">Conctact Me</h1>
                <span className="contactDesc">If you need to contact me</span>

                <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" name='your_name' placeholder='Your Name' />
                    <input type="email" className="email" name='your_email' placeholder='Your Email' />
                    <textarea name="message" id="" cols="30" rows="10" className="msg" placeholder='Your Message'></textarea>
                    <button type='submit' className="submitBtn">Submit</button>

                    <div className="links">
                        <h2 className='myContacts'>Contact me by one click! <img className='pointer' src={PointToBottom} alt="" /></h2>
                        <div className='contacts'>
                            <a href="https://www.facebook.com/injifano.tamiru/" target="_blank"> <img src={fb} alt="" className="link" /> </a>
                            <a href="https://t.me/InjifannooTU" target="_blank"> <img src={tg} alt="" className="link" /></a>
                            <a href="tel:+251962408198" target="_blank"> <img src={phone} alt="Phone" className="link" /></a>
                            <a href="mailto:injifanotu@gmail.com.com" target="_blank"> <img src={email} alt="" className="link" /></a>
                            <a href="https://www.linkedin.com/in/injifanotamiru/" target="_blank"> <img src={linkedin} alt="" className="link" /></a>
                            <a href="https://github.com/injifannoo/" target="_blank"> <img src={github} alt="" className="link" /></a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default contact
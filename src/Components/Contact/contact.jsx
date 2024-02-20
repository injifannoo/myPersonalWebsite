import React from 'react'
import './contact.css'
import client1 from '../../images/health.jpg'
import fb from '../../images/icons/contact/facebook.png'
import tg from '../../images/icons/contact/tg.png'
import phone from '../../images/icons/contact/phone.png'
import email from '../../images/icons/contact/email.jpg'
import linkedin from '../../images/icons/contact/linkedin.png'

const contact = () => {
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
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder='Your Name' />
                    <input type="email" className="email" placeholder='Your Email'/>
                    <textarea name="message" id="" cols="30" rows="10" className="msg" placeholder='Your Message'></textarea>
                    <button type='button' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={fb} alt="" className="link" />
                        <img src={tg} alt="" className="link" />
                        <img src={phone} alt="Phone" className="link" />
                        <img src={email}alt="" className="link" />
                        <img src={fb} alt="" className="link" />
                        <img src={fb} alt="" className="link" />

                    </div>
                </form>
            </div>
        </section>
    )
}

export default contact
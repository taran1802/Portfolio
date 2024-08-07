// Contact.js

import React from 'react';
import './contact.css';
import linkedin from '../../assets/linkedin.png';
import gmail from '../../assets/gmail.png';
import phone from '../../assets/phone.png';

const Contact = () => {
    return (
        <section className="contact">
            <h2>CONTACT</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <img src={linkedin} alt="LinkedIn" className="contact-icon" />
                    <a href="https://www.linkedin.com/in/taranjot-kaur-a68775284/">LinkedIn</a>
                </div>
                <div className="contact-item">
                    <img src={gmail} alt="Gmail" className="contact-icon" />
                    <p>Email: taranjot.1804@gmail.com</p>
                </div>
                <div className="contact-item">
                <img src={phone} alt="Gmail" className="fas fa-phone contact-icon" />
                    
                    <p>Phone:8265041901</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;

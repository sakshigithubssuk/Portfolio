import './contact.css';
import image from '../../assets/image.png';
import facebookIcon from '../../assets/facebook-icon.png';
//import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pvx8da9', 'template_ksggvb5', form.current, 'jM7vlXMBZ1m9gSFcE')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
           
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='your_name' />
                    <input type="text" className="email" placeholder='Your Email' name='your_email' />
                    <textarea name="message" placeholder='Your Message' className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        {/* <img src={twitterIcon} alt="Twitter" className="link" /> */}
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
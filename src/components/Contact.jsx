import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useScroll } from './ScrollContext';

export default function Contact() {
    const { contactRef } = useScroll();
    return(
        <section  id="contact" className="contact" ref={contactRef}>
            <div className="contact-info">
                <h2>Contact Me</h2>
                <p><i className="fas fa-phone"></i> +2348159676272</p>
                <p><i className="fas fa-envelope"></i> jeffersonchukwu2006@gmail.com</p>
                <p><i className="fas fa-map-marker-alt"></i> 27 Jimoh Oyediran Street, Orogun Ibadan</p>
            </div>
            <div className="contact-form">
                <h2>Send a Message</h2>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Name" name="name" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="E-mail" name="email" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Message" name="message"></textarea>
                    </div>
                    <button className="form-btn" type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}
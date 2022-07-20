import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_0fqcgrv', 'template_0svc0so', form.current, 'R3GAWq72Mk473g_9V')

    e.target.reset();
    };

    return (
        <div>
            <h2 className="contact__title"> Get in Touch</h2>
            <h3> Contact Me </h3>
            <div className="container contact__container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea type="message" rows="8" placeholder="Your Message" required ></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
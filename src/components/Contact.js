import React, {useState} from 'react';
import './Contact.css';
import {FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank You! Message Submited.");
        //Here you can integrate with EmailJS or Formspree
        setFormData({name: "", email: "", message: ""});
    };

    return(
        <section className="contact">
            <h3>Contact Me</h3>
            <p className='contact-intro'>
                I'm currently looking for internship or junior developer opportunities. Whether you have a project, a job oppotunity, or just want to connect - feel free to reach out
            </p>

            <div className='contact-links'>
                <a href="mailto:abhishekmgs4318@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope /> abhishekmgs4318@gmail.com
                </a>
                <a href="https://linkedin.com/in/abhishek-yadav-b86396250" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn Profile
                </a>
                <a href="https://github.com/Abhi25092" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub Profile
                </a>
            </div>

            <form onSubmit={handleSubmit} className='contact-form'>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                <button type="Submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
import React, { useState } from 'react';
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "66202ba1-1655-4804-a241-ec34077f72ae");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Thank you! We’ll get back to you soon.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Get in Touch <img src={msg_icon} alt="" /></h3>
                <p>
                    Planning a trip or have questions about our tours in Ethiopia? 
                    We’re happy to help you customize your cultural adventure. 
                    Reach out to us using the form or the contact details below.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" /> explore@ethiocultours.com</li>
                    <li><img src={phone_icon} alt="" /> +251 912-345-678</li>
                    <li><img src={location_icon} alt="" /> Bole Subcity, Addis Ababa, Ethiopia</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

                    <label>Your Message</label>
                    <textarea name="message" rows="6" placeholder="How can we help you?" required></textarea>

                    <button type="submit" className='btn dark-btn'>
                        Submit Now <img src={white_arrow} alt="" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;

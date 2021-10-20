import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact-us">
            <h2 className="text-white">Contact Us</h2>
            <p className="text-white">Do You want any information and give feedback to us Please fill the text box and click to the send massage.</p>
            <div className="contact">
                <input className="w-50" type="text" placeholder="Your Name" />
                <input className="w-50" type="text" placeholder="Your Email" />
                <input className="w-50" type="text" placeholder="Your Subject" />
                <textarea className="w-50" name="" id="" cols="20" rows="5">Message</textarea>
                <Button className="btn-style w-50" variant="primary">Submit</Button>
            </div>
        </div>
    );
};

export default Contact;
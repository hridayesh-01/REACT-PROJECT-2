import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h3>Contact Us</h3>
      <p4>We'd love to hear from you. Whether you have questions about our services or need advice on financial matters, feel free to get in touch.</p4>
      <form>
        <label>
          <span>Name:</span>
          <input type="text" name="name" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Message:</span>
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

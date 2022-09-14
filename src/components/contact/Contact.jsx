import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nahnxjr', 'template_wc3gur9', form.current, 'X59Ix7GMgfMxw-RNt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>athie281@gmail.com</h5>
            <a href='mailto:athie281@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <IoLogoTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@EshwarAathi</h5>
            <a href='https://twitter.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>7010665491</h5>
            <a href='https://api.whatsapp.com/send?phone=7010665491' target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/contactstyle.css'

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_odslkod', 'template_o03wvrb', form.current, '0ToYHyb-8PgQOfeHi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  

  return (
    <div className='contactform'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='text' type="text" name="user_name" />
      <br></br>
      <label>Email</label>
      <input className='text' type="email" name="user_email" />
      <br></br>
      <label>Message</label>
      <textarea className='text' name="message" />
      <br></br>
      <input className='button' type="submit" value="Send" />
    </form>
    </div>
  );
};
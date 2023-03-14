import { useState } from 'react';

function ContactForm () {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted')
  }
  
  return (
    <>
    <form onSubmit = {handleSubmit}>
      <input name="name" onChange={handleChange} type="text" placeholder="Enter Your Name" />
      <input name="email" onChange={handleChange} type="email" placeholder="Enter Your Email Address" />
      <textarea name="message" onChange={handleChange} placeholder="Enter Your Message..." cols="30" rows="10"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </>
  )
}

export default ContactForm;
import React, {useState} from 'react';

const [formState, setFormState] = useState({name: '', email: '', message: ''});
const {name, email, message} = formState;
function ContactForm(){

    return (
        <section>


          <form id="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" defaultValue={formState.name} required/>
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
 

}

export default ContactForm;
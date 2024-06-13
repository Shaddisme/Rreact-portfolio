import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e71729db-1eb6-490f-b102-95e4cd342f59");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message)
          console.log("Success", res);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me 
                   a message about anything that you want me to work on. You can contact me 
                   anytime.                  
                </p>       
                   <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>shadrackmangi6@gmail.com</p>                            
                        </div>
                    </div>        
                   <div className="contact-details">
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+1 437 566 6962</p>
                        </div>
                    </div>        
                   <div className="contact-details">
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p> Toronto, Canada</p>
                        </div>
                    </div>        
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" placeholder='Enter your message' rows="8"></textarea>
                <button className='contact-submit' type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
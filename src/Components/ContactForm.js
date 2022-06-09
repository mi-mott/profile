import { useRef } from "react";
import emailjs from "emailjs-com"
import "./ContactForm.css"

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm('service_2b6e3e8', 'template_sa9kf7o', form.current, '7tsV3VG8xKQgme5Vh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <>  
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <div>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <div>
                    <input type="text" name="phone-number" placeholder="Phone No." />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <div>
                    <textarea name="message" placeholder="Message"/>
                </div>
                <div>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </>
    )
}

export default ContactForm
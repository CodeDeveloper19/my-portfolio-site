import { useRef, useContext } from "react";
import { notificationContext } from '../src/pages/index';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [setNotificationIcon, setErrorTitle, setErrorMessage, setShowNotification] = useContext(notificationContext);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY )
        .then(() => {
            setNotificationIcon('/contact/done.gif');
            setErrorTitle('Success!');
            setErrorMessage('You have sent your message successfully');
            setShowNotification(true);
            form.current.reset();
        }, () => {
            setNotificationIcon('/contact/error.gif');
            setErrorTitle('Error');
            setErrorMessage('There was an error in sending your message');
            setShowNotification(true);
        });
    }

    return ( 
      <form ref={form} className="w-full px-0 tablet:px-[15px] mt-[60px] z-20" id="contact" onSubmit={sendEmail}>
          <input type='text' className='bg-[#E6F1FF] rounded-[5px] w-full text-[13px] py-[15px] px-[20px] border-0 mb-[20px] outline-0 placeholder:italic' placeholder='Enter your name' aria-label="enter your name input box" required name="user_name"></input>
          <input type='email' className='bg-[#E6F1FF] rounded-[5px] w-full text-[13px] py-[15px] px-[20px] border-0 mb-[20px] outline-0 placeholder:italic' placeholder='Enter your email address' aria-label="enter your email address input box" required name="user_email"></input>
          <textarea className='bg-[#E6F1FF] rounded-[5px] w-full text-[13px] py-[15px] px-[20px] border-0 mb-[30px] h-[200px] outline-0 placeholder:italic' placeholder='Message...' aria-label="eneter your message box" required name="message"></textarea>
          <button type="submit" className="text-[14px] text-[#64ffd9] w-fit hover:scale-110 transition-[transform] duration-[400ms]">Send Email<i className="ml-[10px] fa-solid fa-paper-plane"></i></button>
      </form>
     );
}
 
export default Contact;
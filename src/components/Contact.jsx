import './Contact.css';
import Button from './Button';

const Contact = () => {
  return (
    <section id='Contact'>
    <div className='contact_msg'>
    <h2>Get in Touch with Me</h2>
    <br/>
    <p>Please feel free to get in touch with me. I am always looking <br/>for new opportunities to utilize my skills and grow as a web developer.</p>
    <Button/>
    </div>
    <footer>
      <p className='footer_p'>@<span>Janhvi Singh</span>| All rights reserved.</p>
    </footer>
    </section>
  )
}

export default Contact
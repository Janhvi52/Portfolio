import './Header.css';
import Button from './Button';
import HeaderSocials from './HeaderSocials';
import illustration1 from '../assets/ggood.png'

const Header = () => {
  return (
    <header className='header_container'>
    <div className='left_portion'>
    <h4>Hey there, I'm</h4>
    <h1>Janhvi Singh.</h1>
    <h3 className="text-light">A Web Developer capable of building fully functional websites.
    <br/>Currently working as a Software Development Intern @ <span>UnoTag</span>.</h3>
    <Button/>
    </div>
    <div className='right_portion'>
      <img src={illustration1} width="100%" height="80%" alt='illustration'/>
    </div>
    <p className="const_mail">janhvi52@gmail.com</p>
   <HeaderSocials/>
    </header>
  )
}

export default Header
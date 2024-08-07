import React from 'react'
import './intro.css';
import bg from '../../assets/phototaran.jpg'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'
const intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm<span className='introName'> Taranjot Kaur</span><br/>Frontend Developer</span>
            <p className='introPara'> I am a Final year Computer Science Enginnering undergraduate, with a keen interest in web development <br/>and problem-solving.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>

        </div>
        <img src={bg} alt="Portfolio" className='bg'/>
    </section>

  );
}

export default intro;

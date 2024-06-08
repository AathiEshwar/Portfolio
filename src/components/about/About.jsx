import React from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <h5>Get to know</h5>
            <h2 className='about-text'>About Me</h2>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          With a dynamic fusion of technical artistry and game design prowess, I bring two years of immersive experience to the gaming realm. As a seasoned technical artist within the Unreal Engine environment for one year, I've honed my skills in optimizing performance and enhancing visual fidelity. My versatility extends to game design, where I've spent another year crafting captivating gaming experiences. Specializing in 3D character modeling, animation, and rigging, I breathe life into virtual worlds with meticulous attention to detail. My portfolio stands as a testament to my commitment to innovation and my ability to seamlessly blend artistry with technology in the ever-evolving landscape of game development.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
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
            Dedicated and creative Game Developer and
            Designer with 1 year of experience in the video
            game industry.
            Collaborated cross-functionally to conceptualize, develop, and design
            gameplay features, mechanics, and systems for mobile.Contributed to the
            ideation, creation, and refinement of game concepts, narratives, and
            immersive game worlds. Designed and implemented engaging gameplay
            mechanics, including character interactions, combat systems, and user
            interfaces.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
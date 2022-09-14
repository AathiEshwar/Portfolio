import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>


        <div className='experience__frontend'>
          <h3>Game Engine</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Unreal</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Unity</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Godot</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Kotlin</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>


        <div className='experience__backend'>
          <h3>3D Softwares</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Maya</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Blender</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Zebrush</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 1,
    image: IMG2,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 1,
    image: IMG3,
    title: '',
    showDemo: true,
    demo: 'https://drive.google.com/file/d/1pYjSPCMG6Z0NkBAcr_Ljjzhvb5meHb2Z/view?usp=sharing',
  },
]

const envScene = [
  {
    id: 1,
    image: IMG4,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h3 style={{ marginLeft: '43%', marginBottom: '10px'}}>Top Down View Game</h3>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, demo, showDemo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {showDemo && 
                  <a href={demo} className='btn btn-primary'>Live Demo</a> }
                </div>
              </article>
            )
          })
        }
      </div>

      <h3 style={{ marginLeft: '43%', marginBottom: '10px', marginTop: '10px'}}>Environmental Scene</h3>

      <div className='container portfolio__container'>
        {
          envScene.map(({ id, image, title, demo, showDemo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {showDemo && 
                  <a href={demo} className='btn btn-primary'>Live Demo</a> }
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
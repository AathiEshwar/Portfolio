import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.JPG';
import IMG2 from '../../assets/portfolio2.PNG';
import IMG3 from '../../assets/portfolio3.JPG';

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Amaxing Game by AathiEsha',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 1,
    image: IMG2,
    title: 'Amaxing Game by AathiEsha',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 1,
    image: IMG3,
    title: 'Amaxing Game by AathiEsha',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 1,
    image: IMG2,
    title: 'Amaxing Game by AathiEsha',
    showDemo: true,
    demo: 'https://github.com',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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
    </section>
  )
}

export default Portfolio
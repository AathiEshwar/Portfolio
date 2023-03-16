import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.png';
import IMG7 from '../../assets/portfolio7.png';
import IMG8 from '../../assets/Snowworld.jpg';
import IMG9 from '../../assets/fantasysnowWorld.jpg';
import IMG10 from '../../assets/videoImage.png';
import IMG11 from '../../assets/alreadyVideoPhoto.png';
import IMG12 from '../../assets/houdini.jpg';
import IMG13 from '../../assets/portfolio8.png';

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
  {
    id: 1,
    image: IMG13,
    title: '',
    showDemo: true,
    demo: 'https://drive.google.com/file/d/1Cmbnq4afNLOXyZRiNakR3rdhvQMgRxhd/view?usp=drive_web',
  },
]

const platformGame = [
  {
    id: 1,
    image: IMG5,
    title: '',
    showDemo: true,
    demo: 'https://drive.google.com/file/d/14Z3UkPxNPQbytNifN1SXj8VqcRQxUguB/view?usp=sharing_eil_se_dm&ts=6337f2e2',
  },
  {
    id: 2,
    image: IMG11,
    title: '',
    showDemo: true,
    demo: 'https://office-blog-giles.s3.ap-south-1.amazonaws.com/healthsystem.mp4',
  },
]

const metaHumans = [
  {
    id: 1,
    image: IMG6,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG7,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
]

const photoRealisitic = [
  {
    id: 1,
    image: IMG8,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG9,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG10,
    title: '',
    showDemo: true,
    demo: 'https://office-blog-giles.s3.ap-south-1.amazonaws.com/SNOWWORLD_(2).avi',
  },
]

const houdini = [
  {
    id: 1,
    image: IMG12,
    title: '',
    showDemo: true,
    demo: 'https://drive.google.com/file/d/1o0IGON7ULIOU-JHDVzTeGppPkHkVEYBl/view?ts=63e0c834',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h3 className='portfolio__name'>Top Down View Game</h3>

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
                    <a href={demo} className='btn btn-primary'>Live Demo</a>}
                </div>
              </article>
            )
          })
        }
      </div>

      <h3 className='portfolio__name'>Environmental Scene</h3>

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
                    <a href={demo} className='btn btn-primary'>Live Demo</a>}
                </div>
              </article>
            )
          })
        }
      </div>

      <h3 className='portfolio__name'>Platformer Game</h3>

      <div className='container portfolio__container'>
        {
          platformGame.map(({ id, image, title, demo, showDemo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {showDemo &&
                    <a href={demo} className='btn btn-primary'>Live Demo</a>}
                </div>
              </article>
            )
          })
        }
      </div>

      <h3 className='portfolio__name'>Meta Humans</h3>

      <div className='container portfolio__container'>
        {
          metaHumans.map(({ id, image, title, demo, showDemo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {showDemo &&
                    <a href={demo} className='btn btn-primary'>Live Demo</a>}
                </div>
              </article>
            )
          })
        }
      </div>

      <h3 className='portfolio__name'>PhotoRealisitic Environment</h3>

      <div className='container portfolio__container'>
        {
          photoRealisitic.map(({ id, image, title, demo, showDemo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {showDemo &&
                    <a href={demo} className='btn btn-primary'>Live Demo</a>}
                </div>
              </article>
            )
          })
        }
      </div>

      <h3 className='portfolio__name'>Houdini</h3>

      <div className='container portfolio__container'>
        {
          houdini.map(({ id, image, title, demo, showDemo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {showDemo &&
                    <a href={demo} className='btn btn-primary'>Live Demo</a>}
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
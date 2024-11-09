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
import IMG14 from '../../assets/maya1.jpg';
import IMG15 from '../../assets/maya2.jpg';
import IMG16 from '../../assets/maya3.jpg';
import IMG17 from '../../assets/maya4.jpg';
import IMG18 from '../../assets/maya5.jpg';
import IMG19 from '../../assets/env1.png';
import IMG26 from '../../assets/env8.png';
import IMG27 from '../../assets/env9.png';
import IMG29 from '../../assets/cinseq.jpeg';
import IMG30 from '../../assets/extraction1.png';
import IMG31 from '../../assets/extraction2.png';
import IMG32 from '../../assets/extraction3.png';
import IMG33 from '../../assets/extraction4.png';
import IMG34 from '../../assets/extraction5.png';
import Document1 from '../../assets/Document1.pdf';
import Document2 from '../../assets/Document2.pdf';
import Document3 from '../../assets/Document3.pdf';

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

const cinseq = [
  {
    id: 1,
    image: IMG29,
    title: '',
    showDemo: true,
    demo: 'https://drive.google.com/file/d/1bk7A17MCZvX2JLnI5D_fDhX9NpBiiOXl/view',
  },
  {
    id: 1,
    image: IMG13,
    title: '',
    showDemo: true,
    demo: 'https://drive.google.com/file/d/1Cmbnq4afNLOXyZRiNakR3rdhvQMgRxhd/view?usp=drive_web',
  },
]

const extractMap = [
  {
    id: 1,
    image: IMG30,
    title: '',
    showDemo: false,
    demo: '',
  },
  {
    id: 2,
    image: IMG31,
    title: '',
    showDemo: false,
    demo: '',
  },
  {
    id: 3,
    image: IMG32,
    title: '',
    showDemo: false,
    demo: '',
  },
  {
    id: 4,
    image: IMG33,
    title: '',
    showDemo: false,
    demo: '',
  },
  {
    id: 5,
    image: IMG34,
    title: '',
    showDemo: false,
    demo: '',
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
    image: IMG19,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 1,
    image: IMG26,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 1,
    image: IMG27,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
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

const maya = [
  {
    id: 1,
    image: IMG14,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG15,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG16,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: IMG17,
    title: '',
    showDemo: false,
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: IMG18,
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

      <h3 className='portfolio__name'>Android shipped titles</h3>

      <div className='container portfolio__container'>
        {
          <>
            <article className='portfolio__item'>
              <h3>Wildrun: Safari Shooter</h3>
              <div className='portfolio__item-cta'>
                <a href="https://play.google.com/store/apps/details?id=com.dumadu.wildsafarishooter" className='btn btn-primary'>Playstore link</a>
              </div>
            </article>
            <article className='portfolio__item'>
              <h3>TrackMaster: Train Puzzle</h3>
              <div className='portfolio__item-cta'>
                <a href="https://play.google.com/store/apps/details?id=com.lv.gp.trackmastertrainpuzzle" className='btn btn-primary'>Playstore link</a>
              </div>
            </article>
            <article className='portfolio__item'>
              <h3>Games tested and bug fixes</h3>
              <div className='portfolio__item-cta'>
                <a href="https://play.google.com/store/apps/details?id=com.dumadugames.farkleblast" className='btn btn-primary'>Playstore link</a>
              </div>
            </article>
          </>
        }
      </div>

      <h3 className='portfolio__name'>Game Design Documents</h3>
      <div className='documents'>
        <a href={Document1} download className='btn'>Document 1</a>
        <a href={Document2} download className='btn'>Document 2</a>
        <a href={Document3} download className='btn'>Document 3</a>
        <a target='_blank' href="https://drive.google.com/drive/folders/1gBhbDHEFVdNBHm6AFBsddeFfQ5GDyND1" className='btn'>Document 4</a>
      </div>

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

      <h3 className='portfolio__name'>Cinematic Sequence</h3>

      <div className='container portfolio__container'>
        {
          cinseq.map(({ id, image, title, demo, showDemo }) => {
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

      <h3 className='portfolio__name'>Extraction Map</h3>

      <div className='container portfolio__container'>
        {
          extractMap.map(({ id, image, title, demo, showDemo }) => {
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

      <h3 className='portfolio__name'>Maya</h3>

      <div className='container portfolio__container'>
        {
          maya.map(({ id, image, title, demo, showDemo }) => {
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
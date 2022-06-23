import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Projects.css'

import shape from '../../../src/img/Projects/shape-bg.png'
import blog from '../../../src/gif/blog.gif'
import developer from '../../../src/gif/dev.gif'
import portfolio from '../../../src/gif/port.gif'
import travel from '../../../src/gif/travel.gif'
import twins from '../../../src/gif/twins.gif'
import sports from '../../../src/gif/sports.gif'

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  }

  return (
    <div>
      <ScreenHeading
        title={'Projects'}
        subHeading={'My Completed and Ongoing Projects'}
      />
      <section className='projects-section fade-in' id={props.id || ''}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel
              className='owl-carousel'
              id='projects-carousel'
              {...options}
            >
              <div className='col-lg-12'>
                <div className='prjct-item'>
                  <div className='prjct-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      This project is my professional portfolio that your
                      currently viewing. Send me a message for any request,
                      ideas, or Hiring inquiries, Or you can just say hello.
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='prjct-info'></div>
                  <img src={portfolio} alt='portfolio' />
                  <h5>jaytee.tech</h5>
                  <p>React.js | Node.js | Typical </p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='prjct-item'>
                  <div className='prjct-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      A Responsive Social media app for developers to interact,
                      post, and share code. Also a great app to colaborate and
                      share ideas on various projects.
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='prjct-info'></div>
                  <img src={developer} alt='social media' />
                  <h5>geekmonster.tech</h5>
                  <p>Next.js | React.js | Tailwind CSS</p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='prjct-item'>
                  <div className='prjct-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      A sports app for all things Pro, College, etc. along the
                      interstate 65 sports trail. Sports fans can ineteract and
                      post there own thoughts, blogs, pics, and video.
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='prjct-info'></div>
                  <img src={sports} alt='sports app' />
                  <h5>i65sports.com</h5>
                  <p>Web & Mobile App</p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='prjct-item'>
                  <div className='prjct-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      A travel site for all beach front and Island get aways and
                      destinations. For finding discount rates for flights and
                      hotels. B&B's, Yime Shares, and more.
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='prjct-info'></div>
                  <img src={travel} alt='travel site' />
                  <h5>Beechwood Travel</h5>
                  <p>Web & Mobile App</p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='prjct-item'>
                  <div className='prjct-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      This is my blog for all things Tech (Past | Present |
                      Future) that holds seriouse interest in my everyday
                      researching of Tech possibilities. Reviews on ground
                      breaking tech.
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='prjct-info'></div>
                  <img src={blog} alt='blog' />
                  <h5>My Tech Blog</h5>
                  <p>Web & Mobile App</p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='prjct-item'>
                  <div className='prjct-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      A dating app for twins wanting to meet and or date other
                      twins. Also, for non-twins as well. So if you are a twin
                      and havent found that identical you, then give us a try.
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='prjct-info'></div>
                  <img src={twins} alt='dating app' />
                  <h5>TwinsMeet.com</h5>
                  <p>Web & Mobile App</p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className='footer-image'>
        <img src={shape} alt='Phot0 not responding' />
      </div>
    </div>
  )
}

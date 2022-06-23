import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.facebook.com/DevJaytee'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='https://twitter.com/DevJaytee'>
                <i className='fa fa-twitter-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='#'>
                <i className='fa fa-youtube-square'></i>
              </a>
              <a href='https://github.com/jaytee-thomas'>
                <i className='fa fa-github-square'></i>
              </a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {' '}
              My Name: <span className='highlighted-text'>Jason Thomas</span>
            </span>
          </div>

          <div className='profile-details-role'>
            <span className='primary-text'>
              {' '}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Full Stack Developer ',
                    1000,
                    'React | React Native ',
                    1000,
                    'Linux Cloud SysAdmin ☁️',
                    1000,
                    'AWS Cloud Developer',
                    1000,
                    'AWS IoT Core',
                    1000,
                    'Figma | Framer | Sketch',
                    1000,
                    'Photoshop | Illustrator',
                    1000,
                    'Premier Pro | After Effects',
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Developing Full Stack Applications, Combined With AWS
                Technologies.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button
              className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href='MyResume.pdf' download='Jaytee MyResume.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  )
}

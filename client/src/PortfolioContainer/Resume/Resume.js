import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    )
  }

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ]

  //here we have
  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 85 },
    { skill: 'Python', ratingPercentage: 85 },
    { skill: 'React | React Native', ratingPercentage: 85 },
    { skill: 'Node JS', ratingPercentage: 75 },
    { skill: 'Express JS', ratingPercentage: 89 },
    { skill: 'GraphQL', ratingPercentage: 89 },
    { skill: 'Mongo Db', ratingPercentage: 70 },
    { skill: 'MySQL', ratingPercentage: 80 },
    { skill: 'HTML', ratingPercentage: 80 },
    { skill: 'CSS', ratingPercentage: 80 },
  ]

  const projectsDetails = [
    {
      title: 'jaytee.tech ',
      duration: { fromDate: '2022', toDate: '2022' },
      description:
        'This is my professional portfolio loaded with my credentials, work history, projects, interest and more. this will be periodically updated as I complete more projects and acomplishments',
      subHeading:
        'Technologies Used: Node.js, React, After Effects, Premiere Pro, Photoshop.',
    },
    {
      title: 'geekmonster.tech',
      duration: { fromDate: '2022', toDate: '2022' },
      description:
        'An app where developers, makers, engineers, designers, and more can colaborate and showcase their latest projects',
      subHeading:
        'Technologies Used:  Full-Stack-React, Redux, Mongo DB, Express Js, Node JS.',
    },
    {
      title: 'i65sports.com',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'A Sports app for your latest news on your favorite teams, players, and sporting events. Featured Documenteries and uploaded video Vlogs or Blogs by you the fans',
      subHeading:
        'Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux.',
    },
  ]

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={'University of Alabama in Huntsville'}
        subHeading={'BACHELOR OF SCIENCE COMPUTER SCIENCE'}
        fromDate={'2017'}
        toDate={'Present'}
      />

      <ResumeHeading
        heading={'Auburn University'}
        subHeading={'Linux Cloud Systems Administrator'}
        fromDate={'2022'}
        toDate={'2022'}
      />
      <ResumeHeading
        heading={'Bootcamp'}
        subHeading={'True Coders'}
        fromDate={'2022'}
        toDate={'2022'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'>
        <ResumeHeading
          heading={'SMAP - University of Alabama in Huntsville'}
          subHeading={'Research Assistant II'}
          fromDate={'2015'}
          toDate={'2016'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            Perforn funded research with government industry & university
            organizations. Developed Full Stack Web based projects with
            Javascript, CSS, HTML, and Bootstrap.
          </span>
        </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
            - Developed exestential graph editor project (front-end) published
            in University Scientific Magazine.
          </span>
          <br />
          <span className='resume-description-text'>
            - Colaborated on IoT and robotics projects sponsord by the D.O.D.
            and SMAP (UAH).{' '}
          </span>
          <br />
          <span className='resume-description-text'>
            - I Strived to more then just a mere developer, versatility and
            creativity are my strongest attributes.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading='Sports'
        description='Being a former college athlete still sparks my interest in collegiate and professional sports.'
      />
      <ResumeHeading
        heading='Latest Tech Trends'
        description='Being a developer qualifies me for the life long student club so staying up on the latest and future tech trends is a must.'
      />
      <ResumeHeading
        heading='Travel'
        description='Just being from the planet earth holds no wieght if you havent really seen the planet earth, thats why world travel is a must for ne.'
      />
    </div>,
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    }

    setCarousalOffsetStyle(newCarousalOffset)
    setSelectedBulletIndex(index)
  }

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt='B'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe()
    }
  }, [fadeInSubscription])

  return (
    <div
      className='resume-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>

          <div className='resume-bullet-details'>{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}

export default Resume

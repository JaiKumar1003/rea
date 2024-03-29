// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgStyle = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutImageAlt = 'about'
      const aboutHeadingStyle = isDarkTheme
        ? 'dark-about-heading'
        : 'light-about-heading'

      return (
        <div className={`about-container ${aboutBgStyle}`}>
          <Navbar />
          <hr className="horizontal-line" />
          <div className="about-bottom-card">
            <img className="about-image" src={aboutImage} alt={aboutImageAlt} />
            <h1 className={aboutHeadingStyle}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

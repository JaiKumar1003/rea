// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgStyle = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      const notFoundImage =
        'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

      const notFoundImageAlt = 'not found'

      const notFoundHeadingStyle = isDarkTheme
        ? 'dark-not-found-heading'
        : 'light-not-found-heading'

      const notFoundDescriptionStyle = isDarkTheme
        ? 'dark-not-found-description'
        : 'light-not-found-description'

      return (
        <div className={`not-found-container ${notFoundBgStyle}`}>
          <Navbar />
          <hr className="horizontal-line" />
          <div className="not-found-bottom-card">
            <img
              className="not-found-image"
              src={notFoundImage}
              alt={notFoundImageAlt}
            />
            <h1 className={notFoundHeadingStyle}>Lost Your Way?</h1>
            <p className={notFoundDescriptionStyle}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const navbarBg = isDarkTheme ? 'dark-navbar-bg' : 'light-navbar-bg'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const websiteLogoAlt = 'website logo'

      const homeAboutStyle = isDarkTheme
        ? 'dark-home-about'
        : 'light-home-about'

      const themeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const themeLogoAlt = 'theme'

      return (
        <ul className={`navbar-bg ${navbarBg}`}>
          <li>
            <img
              className="website-logo"
              src={websiteLogo}
              alt={websiteLogoAlt}
            />
          </li>
          <li className="navbar-home-about-card">
            <Link className="common-link" to="/">
              <p className={`navbar-home-about ${homeAboutStyle}`}>Home</p>
            </Link>
            <Link className="common-link" to="/about">
              <p className={`navbar-home-about ${homeAboutStyle}`}>About</p>
            </Link>
          </li>
          <li>
            <button
              data-testid="theme"
              className="navbar-theme-button"
              type="button"
              onClick={toggleTheme}
            >
              <img
                className="navbar-theme"
                src={themeLogo}
                alt={themeLogoAlt}
              />
            </button>
          </li>
        </ul>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

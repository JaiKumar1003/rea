// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgStyle = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeImageAlt = 'home'

      const homeHeadingStyle = isDarkTheme
        ? 'dark-home-heading'
        : 'light-home-heading'

      return (
        <div className={`home-container ${homeBgStyle}`}>
          <Navbar />
          <hr className="horizontal-line" />
          <div className="home-bottom-card">
            <img className="home-image" src={homeImage} alt={homeImageAlt} />
            <h1 className={homeHeadingStyle}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

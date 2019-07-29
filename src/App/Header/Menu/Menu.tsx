import * as React from 'react'
import * as styles from './style.scss'
import Button from './Button/Button'
import * as instagram from 'assets/images/instagram.png'
import * as twitter from 'assets/images/twitter.svg'
import { Link } from 'react-router-dom'

const Menu: React.FC = () => {
  const [isOpen, toggleMenu] = React.useState(false)
  const handleClick = () => toggleMenu(!isOpen)

  return (
    <>
      <Button isOpen={isOpen} onClick={handleClick} />
      <nav className={`${styles.component} ${isOpen ? '' : styles.hidden}`}>
        <ul className={styles.categories}>
          <li>
            <Link to="">All</Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/articles?category=design">Design</Link>
          </li>
          <li>
            <Link to="">Lifestyle</Link>
          </li>
          <li>
            <Link to="">Other</Link>
          </li>
        </ul>
        <ul className={styles.links}>
          <li>
            <Link to="">ABOUT</Link>
          </li>
          <li>
            <Link to="">CONTACT</Link>
          </li>
          <li className={styles.icons}>
            <a href="">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <small>&copy; mvm.org</small>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu

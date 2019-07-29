import * as React from 'react'
import * as logo from 'assets/images/logo.svg'
import * as styles from './style.scss'
import Menu from './Menu/Menu'
import { Link } from 'react-router-dom'

const Header: React.FC = () => (
  <header className={styles.component}>
    <div>
      <h1 className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="mwm" />
        </Link>
      </h1>
      <p className={styles.message}>"mwm" is design blog.</p>
    </div>
    <Menu />
  </header>
)

export default Header

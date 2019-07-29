import * as React from 'react'
import * as styles from './style.scss'
import Title from 'components/Title/Title'
import Button from 'components/Button/Button'

const Footer: React.FC = () => (
  <footer className={styles.component}>
    <Title className={styles.title}>Share</Title>
    <Button className={styles.button}>T</Button>
    <Button className={styles.button}>F</Button>
    <Button className={styles.button}>C</Button>
  </footer>
)

export default Footer

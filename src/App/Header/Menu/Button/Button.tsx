import * as React from 'react'
import * as styles from './style.scss'
import Button from 'components/Button/Button'

interface Props {
  isOpen: boolean
  onClick: () => void
}

const MenuButton: React.FC<Props> = props => {
  const style = props.isOpen ? styles.close : styles.menu
  return (
    <Button className={`${styles.component} ${style}`} onClick={props.onClick}>
      <span />
      <span />
      <span />
    </Button>
  )
}

export default MenuButton

import * as React from 'react'
import * as styles from './style.scss'

interface Props {
  className?: string
  onClick?: () => void
}

const Button: React.FC<Props> = props => {
  return (
    <button
      className={`${styles.component} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  className: '',
  onClick: () => {}
}

export default Button

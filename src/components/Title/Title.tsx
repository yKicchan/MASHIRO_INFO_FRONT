import * as React from 'react'
import * as styles from './style.scss'

interface Props {
  className?: string
}

const Title: React.FC<Props> = props => {
  return (
    <h2 className={`${styles.component} ${props.className}`}>
      {props.children}
    </h2>
  )
}

Title.defaultProps = {
  className: ''
}

export default Title

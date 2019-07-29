import * as React from 'react'
import * as styles from './style.scss'
import * as sample from 'assets/images/sample.jpg'

interface Props {
  image?: string
}

const Detail: React.FC<Props> = props => {
  return (
    <figure className={styles.bgimg}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <filter id="bgBlur">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <image xlinkHref={props.image} filter="url(#bgBlur)">
          {/* <img src={props.image} alt="background image" /> */}
        </image>
      </svg>
    </figure>
  )
}

Detail.defaultProps = {
  image: sample
}

export default Detail

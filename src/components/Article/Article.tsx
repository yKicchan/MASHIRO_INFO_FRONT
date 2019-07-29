import * as React from 'react'
import * as styles from './style.scss'
import * as sample from 'assets/images/sample.jpg'

interface Props {
  image?: string
  title?: string
  date?: string
  className?: string
}

const Article: React.FC<Props> = props => {
  return (
    <article className={`${styles.component} ${props.className}`}>
      <a href="/articles/1">
        <figure className={styles.image}>
          <img src={props.image} alt="image" />
        </figure>
        <h3 className={styles.title}>{props.title}</h3>
        <time dateTime={props.date} className={styles.date}>
          {props.date}
        </time>
      </a>
    </article>
  )
}

Article.defaultProps = {
  image: sample,
  title:
    'タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。',
  date: '2019.01.01',
  className: ''
}

export default Article

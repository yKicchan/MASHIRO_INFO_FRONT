import * as React from 'react'
import * as styles from './style.scss'
import Title from 'components/Title/Title'
import Article from 'components/Article/Article'

const Articles: React.FC = () => {
  return (
    <section className={styles.component}>
      <Title>Design</Title>
      <p className={styles.count}>160 Hits</p>
      <ul className={styles.articles}>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
      </ul>
    </section>
  )
}

export default Articles

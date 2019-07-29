import * as React from 'react'
import * as styles from './style.scss'
import Title from 'components/Title/Title'
import Article from 'components/Article/Article'

interface Props {
  title: string
}

const Category: React.FC<Props> = props => (
  <section className={styles.section}>
    <div className={styles.title}>
      <Title>{props.title}</Title>
      <p>More</p>
    </div>
    <Article className={styles.article} />
    <Article className={styles.article} />
    <Article className={styles.article} />
  </section>
)

const Index: React.FC = () => {
  return (
    <>
      <Category title="Design" />
      <Category title="Lifestyle" />
      <Category title="Other" />
    </>
  )
}

export default Index

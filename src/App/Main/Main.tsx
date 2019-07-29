import * as React from 'react'
import * as styles from './style.scss'
import { Route, Switch } from 'react-router-dom'
import Index from 'pages/index/Index'
import Articles from 'pages/articles/Articles'
import Detail from 'pages/articles/detail/Detail'

const Main = () => {
  return (
    <main className={styles.component}>
      <Switch>
        <Route exact={true} path="/" component={Index} />
        <Route exact={true} path="/articles" component={Articles} />
        <Route path="/articles/:id" component={Detail} />
      </Switch>
    </main>
  )
}

export default Main

import * as React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => (
  <Router>
    <>
      <Header />
      <Main />
      <Footer />
    </>
  </Router>
)

export default App

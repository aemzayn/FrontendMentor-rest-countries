import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Country from './views/Country'
import { Navbar } from './components'
import { ThemeContext } from './context/ThemeProvider'

// Context

function App() {
  const [darkTheme] = useContext(ThemeContext)
  return (
    <div className={darkTheme ? 'App dark-theme' : 'App'}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:country_id' component={Country} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

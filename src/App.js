import React, {Component} from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// import Helo from './components/Greetings'

import Login from './pages/Login'
import ListBook from './pages/ListBook'

class App extends Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/list-book'  component={ListBook} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App

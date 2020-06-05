import React, {Component} from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// import Helo from './components/Greetings'

import Login from './pages/Login'
import ListBook from './pages/ListBook'
import ListData from './pages/ListData'

class App extends Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/list-book'  component={ListBook} />
            <Route path='/list-data'  component={ListData} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App

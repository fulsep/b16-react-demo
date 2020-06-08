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
import Users from './pages/Users'

class App extends Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/list-book'  component={ListBook} />
            <Route path='/list-data'  component={ListData} />
            <Route path='/users'  component={Users} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App

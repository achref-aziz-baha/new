import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Admin from './components/Admin';
import Hotel from './components/Hotel'; 
import Login from './components/Login'; 
import NavBar from './components/NavBar'; 
import Footer from './components/Footer'; 
import Home from './components/Home' ;
import Favorite from './components/Favorite'




class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/hotel/:id" component={Hotel}/>
          <Route path="/Admin" component={Admin}/>
          <Route path="/Favorite" component={Favorite}/>
        </Switch>
        </div>
      </Router>
    )
  }



}
export default App;

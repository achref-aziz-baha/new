import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
          <div>
              <ul>
                  <li>
                      <Link to='/login'>Login</Link>
                  </li>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/Admin">Admin</Link>
                  </li>
                  <li>
                      <Link to="/Favorite">Favorite</Link>
                  </li>
              </ul>
          </div>
        )
    }
}

export default NavBar;
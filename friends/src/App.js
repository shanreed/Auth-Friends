import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/login';
import Friends from './components/friends';
import AddFriendForm from './components/AddNewFriend'
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">See My Friends</Link>

          </li>
          <li>
            <Link to="/protected-add">Add To My Friends</Link>

          </li>
        </ul>
        <Switch>
          {/* // can not get to this page witout token */}
        <PrivateRoute exact path="/protected" component={Friends} />
        <PrivateRoute exact path="/protected-add" component={AddFriendForm} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

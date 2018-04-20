import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About/About.js';
import ApiDevelopment from './pages/ApiDevelopment';
import Registration from './components/Registration';
import UserView from './pages/UserView/UserView.js'



class App extends Component {

  render() {
    return (
      <Router>
        <div>
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/user-view" component={UserView} />
                <Route path="/api-dev" component={ApiDevelopment} />
                <Route path="/user-registration" component={Registration} />  
              </Switch>

            
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Nav from './components/Nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import ApiDevelopment from './pages/ApiDevelopment';



class App extends Component {

  render() {
    return (
      <Router>
        <div>
            <Nav />
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/api-dev" component={ApiDevelopment} /> 
              </Switch>

            
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About/About.js';
import ApiDevelopment from './pages/ApiDevelopment';

// import FestivalSurvey from './components/FestivalSurvey/FestivalSurvey';

import Registration from './components/Registration';




class App extends Component {

  render() {
    return (
      <Router>
        <div>
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/user-registration" component={Registration} />
                  
                <Route path="/api-dev" component={ApiDevelopment} />

              </Switch>

            
        </div>
      </Router>
    );
  }
}

export default App;

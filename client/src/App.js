import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About/About.js';
import ApiDevelopment from './pages/ApiDevelopment';
import Festival from './components/FestivalSurvey/Festival';
// import FestivalSurvey from './components/FestivalSurvey/FestivalSurvey';
import City from './components/FestivalSurvey/City';
import Registration from './components/Registration';

import UserView from './pages/UserView/UserView.js'
// // import LineUp  from './components/FestivalSurvey/LineUp';
// import Festivals from "./pages/UserView";




class App extends Component {

  render() {
    return (
      <Router>
        <div>
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/user-view" component={UserView} />
                <Route path="/user-registration" component={Registration} />
                {/* <Route path="/Festival" component={Festival}/> */}
                <Route path="/api-dev" component={ApiDevelopment} />
                {/* <Route path="/City" component={City}/>
                
                <Route path="/UserView" component={Festivals}/> */}

              </Switch>

            
        </div>
      </Router>
    );
  }
}

export default App;

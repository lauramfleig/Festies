
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About/About.js';
import ApiDevelopment from './pages/ApiDevelopment';
import Festival from './components/FestivalSurvey/Festival';
import Survey from './components/FestivalSurvey/FestivalSurvey';
import Registration from './components/Registration/Registration';
import UserView from "./pages/UserView/UserView";
import Matches from "./pages/Matches/matches"
import NewAbout from './pages/NewAbout/NewAbout.js'






class App extends Component {

  render() {
    return (
      <Router>
        <div>

              <Switch>
                <Route exact path="/" component={NewAbout} />
                <Route path="/user-profile" component={UserView} />
                <Route path="/user-registration" component={Registration} />
                <Route path="/Festival" component={Festival}/>
                <Route path="/survey" component={Survey}/>
                <Route path="/matches" component={Matches}/>

                
                <Route path="/api-dev" component={ApiDevelopment} />
                



          </Switch>

            
        </div>
      </Router>
    );
  }
}

export default App;
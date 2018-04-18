import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About/About.js';
import ApiDevelopment from './pages/ApiDevelopment';
<<<<<<< HEAD
import 'normalize.css'; 
=======
import Registration from './components/Registration';
>>>>>>> cfae2377f27f7a0b12dcbb6d68f26210277df7cc



class App extends Component {

  render() {
    return (
      <Router>
        <div>
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/api-dev" component={ApiDevelopment} />
                <Route path="/user-registration" component={Registration} />  
              </Switch>

            
        </div>
      </Router>
    );
  }
}

export default App;

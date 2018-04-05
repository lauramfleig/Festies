import React, { Component } from 'react';
import About from './pages/About';
import Logo from './components/Logo';


class App extends Component {
  render() {
    return (
      <div>
          <About>
            <Logo />
          </About>
      </div>
    );
  }
}

export default App;

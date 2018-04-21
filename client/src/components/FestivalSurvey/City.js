import React from "react";
import axios from "axios";
// import "./Survey.css";


class City extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

  handleSubmit(event) {
    event.preventDefault();

    this.props.CitySearch(this.state.value);
    // this.props.nextStep();
  }

  
    // handleSubmit(event) {
      
    //   event.preventDefault();
    //   // this.props.updateSearch(this.state.value);
    //    () => this.props.search(this.state.value);
    //   // this.props.festivalSearch(this.state.search);
    //   // this.props.nextStep();
    // }
  
    render() {
      console.log(this.state.value);
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            What city is your festival located in?
            <input type="text" id="call" name="search" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button onClick={this.handleSubmit}>Show me festivals near this city</button>
        </form>
        );
      }
    }
  
    
    
  

export default City;
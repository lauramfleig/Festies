import React from "react";
import axios from "axios";
import "./Survey.css";


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

      this.props.ChooseFestivalCity(this.state.search);
      this.props.nextStep();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            What city is your festival located in?
            <input type="text" id="call" name="search" value={this.state.search} onChange={this.handleChange} />
          </label>
          
          <button onClick={this.apiCall}>Show me festivals near this city</button>
        </form>
        );
      }
    }
  
    
    
  

export default City;
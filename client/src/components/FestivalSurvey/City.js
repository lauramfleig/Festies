import React from "react";
import axios from "axios";
import './City.css'
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
      console.log(this.state.value);
    }

  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.value);
      console.log(this.props);
      this.props.festivalSearch(this.state.value);
      
      
    }

  
    render() {
      console.log(this.state.value);
      return (
        <form id="find-festival-form" onSubmit={this.handleSubmit}>
          <label id="find-festival-label" className="RegFormLabel">
            <h1 className="find-festival-text">Find Festivals Near:</h1>
            <input type="text" id="call" name="search" placeholder="Enter a City Name" value={this.state.value} onChange={this.handleChange} />
          </label> 
          <button id="submitCity" type="submit">GO</button>
        </form>
        );
      }
    }
  
    
    
  

export default City;
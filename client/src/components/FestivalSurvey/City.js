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
      console.log(this.state.value);
    }

  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.value);
      console.log(this.props);
      this.props.ChooseFestivalCity(this.state.value);
        /* .then(() => this.props.nextStep()); */
      
    }

  
    render() {
      console.log(this.state.value);
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            What city is your festival located in?
            <input type="text" id="call" name="search" value={this.state.value} onChange={this.handleChange} />
          </label>

          
          <button type="submit">Show me festivals near this city</button>

        </form>
        );
      }
    }
  
    
    
  

export default City;
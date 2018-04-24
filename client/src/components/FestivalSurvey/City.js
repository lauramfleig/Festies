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
      this.props.festivalSearch(this.state.value);
      
      
    }

  
    render() {
      console.log(this.state.value);
      return (
        <form onSubmit={this.handleSubmit}>
          <label className="RegFormLabel">
            What city is your festival located in?
            <input type="text" id="call" name="search" className="inputBox" value={this.state.value} onChange={this.handleChange} />
          </label> 
          <button className="regSubmitButton" type="submit">Show me festivals near this city</button>
        </form>
        );
      }
    }
  
    
    
  

export default City;
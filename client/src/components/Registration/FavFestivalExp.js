import React from "react";
import './Registration.css';

class FavFestivalExp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    
      this.props.AddFavFestivalExp(this.state.value);
      this.props.nextStep();

    }

    handlePrevious = () => {
        this.props.previousStep();
      }
  
    render() {
      return (
        <div className="formDiv">
          <form onSubmit={this.handleSubmit}>
            <label>
              What was your favorite festival experience?
              <br></br>
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
            {(this.props.previousStep)?
              <button onClick={this.handlePrevious} value="Previous">Previous</button>
              :
              null}
          </form>
        </div>
      );
    }
  }

export default FavFestivalExp;
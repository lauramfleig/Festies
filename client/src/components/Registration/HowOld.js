import React from "react";
import './Registration.css';

class HowOld extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();

      this.props.AddYourAge(this.state.value);
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
              How old are you?
              <br></br>
              <input type="number" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
            <button onClick={this.handlePrevious} value="Previous">Previous</button>
          </form>
        </div>
      );
    }
  }

export default HowOld;
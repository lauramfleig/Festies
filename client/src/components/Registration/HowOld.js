import React from "react";
import './Registration2.css';

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
            <label className="RegFormLabel">
              How old are you?
              <br></br>
              <input type="number" value={this.state.value} onChange={this.handleChange} required min="3" max="99" className="AgeAndGenderInput inputBox"/>
            </label>
            <br></br>
            <button onClick={this.handlePrevious} className="regPreviousButton">
              <i class="fas fa-chevron-circle-left"></i>
            </button> 
            {(this.props.nextStep) ?
            <button type="submit" className="regSubmitButton" id="SurveySubmit">
              <i class="fas fa-chevron-circle-right"></i>
            </button>
            :null} 
          </form>
        </div>
      );
    }
  }

export default HowOld;
import React from "react";
import './Registration2.css';

class GenderForm extends React.Component {
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

      this.props.AddGender(this.state.value);
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
              What is your gender?
              <br></br>
              <select value={this.state.value} onChange={this.handleChange} required className="AgeAndGenderInput inputBox">
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
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

export default GenderForm;
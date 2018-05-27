import React from "react";
import ErrorModal from "./ErrorModal.js";
import './Registration2.css';

class ImageUrl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false, 
        value: ''
      
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
    }

    showModal = () => {
      this.setState({
        showModal: true
      })
      console.log('show modal working');
    }

    hideModal = () => {
      this.setState({
        showModal: false
      })
      console.log('hide modal working');
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      
      if (this.validateForm()) {
        this.props.CreateUserUrl(this.state.value);
        this.props.nextStep();
      } else {
        this.showModal();
      }
    }

    handlePrevious = () => {
      this.props.previousStep();
    }

    validateForm = () => {
      const URLRegex = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
      return (URLRegex.test(this.state.value));
    } 

    render() {

      const Modal = (this.state.showModal)?
                        <ErrorModal 
                          hideModal={this.hideModal} 
                          message={'Please enter a valid url'}
                          />
                        : null 

      return (
        <div className="formDiv">
          <form onSubmit={this.handleSubmit} name="ImageUrlForm">
            <label className="RegFormLabel">
              Add your pic url here:
              <br></br>
              <input placeholder="https://www.example.com/" type="text" value={this.state.value} onChange={this.handleChange} className="inputBox" required/>
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
          {Modal}
        </div>
      );
    }
  }

export default ImageUrl;
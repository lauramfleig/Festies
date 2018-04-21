import React from "react";
import ErrorModal from "./ErrorModal";
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
        this.props.AddFavFestivalExp(this.state.value);
        this.props.nextStep();
      } else {
        this.showModal();
      }
    }

    handlePrevious = () => {
      this.props.previousStep();
    }

    validateForm = () => {
      const UserNameRegex = /^.{30,}$/;
      return (UserNameRegex.test(this.state.value));
    } 
  
    render() {
      const Modal = (this.state.showModal) ?
        <ErrorModal
          hideModal={this.hideModal}
          message={'Please Enter at Least 30 Characters'}
        />
        : null

      return (
        <div className="formDiv">
          <form onSubmit={this.handleSubmit}>
            <label>
              What was your favorite festival experience?
              <br></br>
              <textarea placeholder="At Least 30 Characters" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
            {(this.props.previousStep)?
              <button onClick={this.handlePrevious} value="Previous">Previous</button>
              :
              null}
          </form>
          {Modal}
        </div>
      );
    }
  }

export default FavFestivalExp;
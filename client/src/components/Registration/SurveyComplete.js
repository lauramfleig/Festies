import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import UserRealName from "./UserRealName";
import UserName from "./UserName";
import ImageUrl from "./ImageUrl";
import HowOld from "./HowOld";
import GenderForm from "./GenderForm";
import AboutDescription from "./AboutDescription";
import FavFestivalExp from "./FavFestivalExp";

class SurveyComplete extends React.Component {
    constructor(props) {
      super(props);
      // set the state of whether the users information can be edited 
      this.state = {
        value: this.props.surveyAnswers,
        renderUserRealName: false,
        renderUserField: false,
        renderUserImageField: false,
        renderUserAgeField: false,
        renderUserGenderForm: false,
        renderUserAboutDescription: false,
        renderFavFestivalExp: false,
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit (event) {
      event.preventDefault(); 
    }

    updateUserRealName = (newRealName) => {
      let tempValue = this.state.value;
      tempValue.username = newRealName;
      this.setState({
        value: tempValue,
        renderUserRealName: false
      });
    }

    updateUserName = (newName) => {
      let tempValue = this.state.value;
      tempValue.user_screen_name = newName;
      this.setState({
        value: tempValue,
        renderUserField: false
      });
    }

    updateUserURL = (url) => {
      let tempValue = this.state.value;
      tempValue.imageURL = url;
      this.setState({
        value: tempValue,
        renderUserImageField: false,
      });
    }

    updateAge = (updatedAge) => {
      let tempValue = this.state.value;
      tempValue.age = updatedAge;
      this.setState({
        value: tempValue,
        renderUserAgeField: false
      });
    }

    updateGender = (updatedGender) => {
      let tempValue = this.state.value;
      tempValue.gender = updatedGender;
      this.setState({
        value: tempValue,
        renderUserGenderForm: false
      });
    }

    updateUserAboutDescription = (updatedAboutDescription) => {
      let tempValue = this.state.value;
      tempValue.about_description = updatedAboutDescription;
      this.setState({
        value: tempValue,
        renderUserAboutDescription: false
      });
    }

    updateUserFavFestivalExp = (updatedFavFestExp) => {
      let tempValue = this.state.value;
      tempValue.favorite_festival_experience = updatedFavFestExp;
      this.setState({
        value: tempValue,
        renderFavFestivalExp: false
      });
    }

    handleFinalSubmit = (event) => {
      let tempValue = this.state.value;
      tempValue.surveyAnswers = event.target.value;
      event.preventDefault(); 
      this.postToTheDB();
    }

    postToTheDB = () => {
      let finalSubmit = this.state.value;
      console.log(JSON.stringify(finalSubmit));
      console.log(finalSubmit + 'heeeeeey');
      axios.post('/api/new_user', finalSubmit)
		  .then((response) => {
        console.log(response);
        this.props.history.push('/user-profile');
		  })
		  .catch(function(error) {
			  console.log(error);
		  });
    }

    // ============================== Render the users information on the page
    render() {
      const UserRealNameField = (this.state.renderUserRealName)?
        (<UserRealName
          CreateUserName={this.updateUserRealName}
          nextStep={()=>{return null}}
        />) :
        (<div>
          <p>First and Last Name: {this.props.surveyAnswers.username}</p>
          <button className="SurveyEditButton"
            onClick={() => { this.setState({ renderUserRealName: true }) }}>Edit Name
          </button>
        </div>)

      const userNameField = (this.state.renderUserField)?
          (<UserName 
            CreateUserScreenName={this.updateUserName}
            nextStep={()=>{return null}}
          />) :
          (<div>
            <p>User Screen Name: {this.props.surveyAnswers.user_screen_name}</p>
            <button className="SurveyEditButton"
              onClick={()=>{this.setState({renderUserField: true})}}>Edit User Name
            </button>
          </div>)
        
      const UserImageField = (this.state.renderUserImageField)?
          (<ImageUrl 
            CreateUserUrl={this.updateUserURL} 
            nextStep={()=>{return null}}  
          />) :
          (<div>
            <p>Your User Image: {this.props.surveyAnswers.imageURL}</p>
            <button className="SurveyEditButton"
              onClick={()=>{this.setState({renderUserImageField: true})}}>Edit Url Image
            </button>
          </div>)

      const UserAgeField = (this.state.renderUserAgeField)?
        (<HowOld
          AddYourAge={this.updateAge} 
          nextStep={()=>{return null}}
        />) :
        (<div>
          <p>Age: {this.props.surveyAnswers.age}</p>
          <button className="SurveyEditButton"
            onClick={()=>{this.setState({renderUserAgeField: true})}}>Edit Age
          </button>
        </div>)

      const UserGenderField = (this.state.renderUserGenderForm)?
        (<GenderForm 
          AddGender={this.updateGender} 
          nextStep={()=>{return null}}
        />) :
        (<div>
          <p>Gender: {this.props.surveyAnswers.gender}</p>
          <button className="SurveyEditButton"
            onClick={()=>{this.setState({renderUserGenderForm: true})}}>Edit Gender
          </button>
        </div>)

        const UserAboutDescriptionField = (this.state.renderUserAboutDescription)?
          (<AboutDescription
            AddAboutDescription={this.updateUserAboutDescription}
            nextStep={()=>{return null}}
          />) :
          (<div>
            <p>Your Festie Description: {this.props.surveyAnswers.about_description}</p>
            <button className="SurveyEditButton"
              onClick={()=>{this.setState({renderUserAboutDescription: true})}}>Edit Festie Description
            </button>
          </div>)

        const UserFavFestivalField = (this.state.renderFavFestivalExp)?
          (<FavFestivalExp 
            AddFavFestivalExp={this.updateUserFavFestivalExp}
            nextStep={()=>{return null}}
          />) :
          (<div>
            <p>Favorite Festival Experience: {this.props.surveyAnswers.favorite_festival_experience}</p>
            <button className="SurveyEditButton" 
              onClick={()=>{this.setState({renderFavFestivalExp: true})}}>Edit Fav Festival Experience
            </button>
          </div>)

      return (
        <form className="RegistrationSurveyComplete">
          <h3 className="RegFormLabel">
           Your Festie Profile: 
          </h3>
          <div className="SurveyCompleteForm">
            {UserRealNameField}
            {userNameField}
            {UserImageField}
            {UserAgeField}
            {UserGenderField}
            {UserAboutDescriptionField}
            {UserFavFestivalField}
          </div>
          <br></br>
          <input type="submit" onClick={this.handleFinalSubmit} value="Complete your Profile" className="finalSubmitButton"/>
        </form>
      );
    }
  }

export default withRouter(SurveyComplete);
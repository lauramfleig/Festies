import React from "react";
import axios from "axios";
import Registration from "./Registration";
import UserName from "./UserName";
import ImageUrl from "./ImageUrl";
import HowOld from "./HowOld";
import GenderForm from "./GenderForm";
import AboutDescription from "./AboutDescription";
import FavFestivalExp from "./FavFestivalExp";

class SurveyComplete extends React.Component {
    constructor(props) {
      super(props);
      // let formObject = {}
      this.state = {
        value: this.props.surveyAnswers,
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
        renderUserImageField: false
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

    getUserDataFromDB = () => {
      axios.get('/api/get_user')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
    }

    postToTheDB = (finalSubmit) => {
      axios.post('/api/new_user', finalSubmit)
		  .then(function(response) {
			  console.log(response);
		  })
		  .catch(function(error) {
			  console.log(error);
		  });
    }
  
    render() {
      const userNameField = (this.state.renderUserField)?
          (<UserName 
            CreateUserScreenName={this.updateUserName} 
            nextStep={()=>{return null}}
          />) :
          (<div>
              <p>User Screen Name: {this.props.surveyAnswers.user_screen_name}</p>
              <button onClick={()=>{this.setState({renderUserField: true})}}>Edit Screen Name</button>
          </div>)
        
      const UserImageField = (this.state.renderUserImageField)?
          (<ImageUrl 
            updateUserURL={this.updateUserURL} 
            nextStep={()=>{return null}}
            previousStep={()=>{return null}}
          />) :
          (<div>
            <p>Your User Image: {this.props.surveyAnswers.imageURL}</p>
            <button onClick={()=>{this.setState({renderUserImageField: true})}}>Edit Url Image</button>
          </div>)

      const UserAgeField = (this.state.renderUserAgeField)?
        (<HowOld
          updateAge={this.updateAge} 
          nextStep={()=>{return null}}
          previousStep={()=>{return null}}
        />) :
        (<div>
          <p>Age: {this.props.surveyAnswers.age}</p>
          <button onClick={()=>{this.setState({renderUserAgeField: true})}}>Edit Age</button>
        </div>)

      const UserGenderField = (this.state.renderUserGenderForm)?
        (<GenderForm 
          updateGender={this.updateGender} 
          nextStep={()=>{return null}}
          previousStep={()=>{return null}}
        />) :
        (<div>
          <p>Gender: {this.props.surveyAnswers.gender}</p>
          <button onClick={()=>{this.setState({renderUserGenderForm: true})}}>Edit Gender</button>
        </div>)

        const UserAboutDescriptionField = (this.state.renderUserAboutDescription)?
          (<AboutDescription
            updateAboutDescription={this.updateAboutDescription} 
            nextStep={()=>{return null}}
            previousStep={()=>{return null}}
          />) :
          (<div>
            <p>Your Festie Description: {this.props.surveyAnswers.about_description}</p>
            <button onClick={()=>{this.setState({renderUserAboutDescription: true})}}>Edit Festie Description</button>
          </div>)

        const UserFavFestivalField = (this.state.renderFavFestivalExp)?
          (<FavFestivalExp 
            updateUserFavFestivalExp={this.updateUserFavFestivalExp}
            nextStep={()=>{return null}}
            previousStep={()=>{return null}}
          />) :
          (<div>
            <p>Favorite Festival Experience: {this.props.surveyAnswers.favorite_festival_experience}</p>
            <button onClick={()=>{this.setState({renderFavFestivalExp: true})}}>Edit Fav Festival Experience</button>
          </div>)

      return (
        <form onSubmit={this.handleFinalSubmit}>
          <h3>
           Your Festie Profile: 
          </h3>
          {userNameField}
          {UserImageField}
          {UserAgeField}
          {UserGenderField}
          {UserAboutDescriptionField}
          {UserFavFestivalField}
          <br></br>
          <input type="submit" value="Complete your Profile" />
        </form>
      );
    }
  }

export default SurveyComplete;
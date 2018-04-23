import React from "react";
import RegistrationHeader from "./RegistrationHeader";
import UserRealName from "./UserRealName";
import UserName from "./UserName";
import ImageUrl from "./ImageUrl";
import HowOld from "./HowOld.js";
import GenderForm from "./GenderForm";
import AboutDescription from "./AboutDescription";
import FavFestivalExp from "./FavFestivalExp";
import SurveyComplete from "./SurveyComplete";
import './Registration.css';
import './RegistrationHeader.css';
 
// The parent component for the Registration Folder
class Registration extends React.Component {
	constructor(props) {
	  super(props);
		// Set the initial state of the entire Registration component
	  this.state = {
		step: 1,
		surveyAnswers: {
			username: '',
			user_screen_name: '',
			imageURL: '',
			age: '',
			gender: '',
			about_description: '',
			favorite_festival_experience: '',
			sesionEmail: sessionStorage.getItem('user_email')
		},
	  };
  
	}

	componentDidUpdate = () => {
		console.log(this.state);
	}
	// function to swith from one component to the next component in the file
	nextStep = () => {
		this.setState({
			step: this.state.step + 1,
		});
	}
	// function to swith from the current component to the previous component
	previousStep = () => {
		this.setState({
			step: this.state.step -1,
		});
	}
	// function to reset the state in the UserRealName Component
	CreateUserName = (username) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.username = username;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('username: ' + username);
	}
	// function to reset the state in the UserName (user_screen_name) Component
	CreateUserScreenName = (screenName) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.user_screen_name = screenName;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('screen name: ' + screenName);
	}
	// function to reset the state in the ImageUrl Component
	CreateUserUrl = (URL) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.imageURL = URL;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('image url: ' + URL)
	}
	// function to reset the state in the HowOld Component
	AddYourAge = (yourAge) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.age = yourAge;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('you is how old? ' + yourAge)
	}
	// function to reset the state in the GenderForm Component
	AddGender = (genderdata) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.gender = genderdata;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('your gender is: ' + genderdata)
	}
	// function to reset the state in the AboutDescription Component
	AddAboutDescription = (description) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.about_description = description;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('About Description: ' + description)
	}
	// function to reset the state in the FavFestivalExp Component
	AddFavFestivalExp = (favFest) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.favorite_festival_experience = favFest;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('Your favorite festival experience: ' + favFest)
	}
	// function to push all of the users answers into the SurveyComplete Component
	surveyCompleteSubmit = (allData) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers = allData;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('survey answers: ' + allData);
	}
	// Function to render the each component on the page in a switch statement
	renderForm = () =>{ switch (this.state.step) {
		case 1:
			return <UserRealName
				CreateUserName={this.CreateUserName}
				nextStep={this.nextStep}/>
		case 2:
			return <UserName
				CreateUserScreenName={this.CreateUserScreenName}
				previousStep={this.previousStep}
				nextStep={this.nextStep}/>
		case 3:
			return <ImageUrl 
				CreateUserUrl={this.CreateUserUrl}
				previousStep={this.previousStep}
				nextStep={this.nextStep}/>
		case 4:
			return <HowOld
				AddYourAge={this.AddYourAge}
				previousStep={this.previousStep}
				nextStep={this.nextStep}/>
		case 5:
			return <GenderForm
				AddGender={this.AddGender}
				previousStep={this.previousStep}
				nextStep={this.nextStep}/>
		case 6:
			return <AboutDescription
				AddAboutDescription={this.AddAboutDescription}
				previousStep={this.previousStep}
				nextStep={this.nextStep}/>
		case 7:
			return <FavFestivalExp
				AddFavFestivalExp={this.AddFavFestivalExp}
				previousStep={this.previousStep}
				nextStep={this.nextStep}/>
		case 8:
			return <SurveyComplete 
				surveyAnswers={this.state.surveyAnswers}
				CreateUserScreenName={this.CreateUserScreenName}
				CreateUserUrl={this.CreateUserUrl}
				AddYourAge={this.AddYourAge}
				AddGender={this.AddGender}
				AddAboutDescription={this.AddAboutDescription}
				AddFavFestivalExp={this.AddFavFestivalExp}
				surveyCompleteSubmit={this.surveyCompleteSubmit}
			/>
		}
	}

	render() {
		// Render each component in order on the screen
		return(
			<div className="registrationContainer">
				<RegistrationHeader/>
					<div className="RegistrationFormDiv">
						{this.renderForm()}
					</div>
			</div>
	)}	
}

export default Registration;
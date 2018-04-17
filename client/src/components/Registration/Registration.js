import React from "react";
import axios from "axios";
import UserName from "./UserName";
import ImageUrl from "./ImageUrl";
import HowOld from "./HowOld.js";
import GenderForm from "./GenderForm";
import AboutDescription from "./AboutDescription";
import FavFestivalExp from "./FavFestivalExp";
import SurveyComplete from "./SurveyComplete";
import './Registration.css';


class Registration extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
		step: 1,
		surveyAnswers: {
			user_screen_name: '',
			imageURL: '',
			age: '',
			gender: '',
			about_description: '',
			favorite_festival_experience: ''
		},
	  };
  
	}

	componentDidUpdate = () => {
		console.log(this.state);
	}

	nextStep = () => {
		this.setState({
			step: this.state.step + 1,
		});
	}

	previousStep = () => {
		this.setState({
			step: this.state.step -1,
		});
	}

	CreateUserScreenName = (screenName) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.user_screen_name = screenName;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('screen name: ' + screenName);
	}

	CreateUserUrl = (URL) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.imageURL = URL;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('image url: ' + URL)
	}
	
	AddYourAge = (yourAge) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.age = yourAge;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('you is how old? ' + yourAge)
	}

	AddGender = (genderdata) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.gender = genderdata;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('your gender is: ' + genderdata)
	}

	AddAboutDescription = (description) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.about_description = description;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('About Description: ' + description)
	}

	AddFavFestivalExp = (favFest) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers.favorite_festival_experience = favFest;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('Your favorite festival experience: ' + favFest)
	}

	surveyCompleteSubmit = (allData) => {
		let tempSurveyAnswers = this.state.surveyAnswers;
		tempSurveyAnswers = allData;
		this.setState({
			surveyAnswers: tempSurveyAnswers
		});
		console.log('survey answers: ' + allData);
	}

	render() {
		switch (this.state.step) {
			case 1:
				return <UserName
					CreateUserScreenName={this.CreateUserScreenName}
					nextStep={this.nextStep}/>
			case 2:
				return <ImageUrl 
					CreateUserUrl={this.CreateUserUrl}
					previousStep={this.previousStep}
					nextStep={this.nextStep}/>
			case 3:
				return <HowOld
					AddYourAge={this.AddYourAge}
					previousStep={this.previousStep}
					nextStep={this.nextStep}/>
			case 4:
				return <GenderForm
					AddGender={this.AddGender}
					previousStep={this.previousStep}
					nextStep={this.nextStep}/>
			case 5:
				return <AboutDescription
					AddAboutDescription={this.AddAboutDescription}
					previousStep={this.previousStep}
					nextStep={this.nextStep}/>
			case 6:
				return <FavFestivalExp
					AddFavFestivalExp={this.AddFavFestivalExp}
					previousStep={this.previousStep}
					nextStep={this.nextStep}/>
			case 7:
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
}

export default Registration;
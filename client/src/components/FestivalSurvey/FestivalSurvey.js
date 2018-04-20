import React from "react";
import City from "./City";
import Festival from "./Festival";
import LineUp from "./LineUp";
// import  "./Survey.css";
import SurveyComplete from "./SurveyComplete";
// import Results from "./Results";

class FestivalSurvey extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
		step: 1,
		Answers: {
    city: '',
    festival:'',
    lineUp:'',
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

	ChooseFestivalCity = (user_city) => {
		let tempSurveyAnswers = this.state.Answers;
		tempSurveyAnswers.city = user_city;
		this.setState({
			Answers: tempSurveyAnswers
		});
		console.log('What city is your festival located? ' + City);
	}

	ChooseFestival = (URL) => {
		let tempSurveyAnswers = this.state.Answers;
		// tempSurveyAnswers.imageURL = URL;
		this.setState({
			Answers: tempSurveyAnswers
		});
		console.log('What festival are you attending? ' + URL)
	}
  
  ChooseALineUp = (lineUp) => {
		let tempSurveyAnswers = this.state.Answers;
		tempSurveyAnswers.lineUp = lineUp;
		this.setState({
			Answers: tempSurveyAnswers
		});
		console.log('What artists do you plan to see? ' + lineUp);
	}


	SurveyComplete = (allData) => {
		let tempSurveyAnswers = this.state.Answers;
		tempSurveyAnswers = allData;
		this.setState ({ 
			Answers: tempSurveyAnswers
		});
		console.log('data' + allData);
		//here you can send this.state.surveyAnserws to your DB because the last thing was submitted
	}

	// Once we have all of the information how to handle the data:::????

  
	render() {
		switch (this.state.step) {
			case 1:
				return <City
					ChooseFestivalCity={this.ChooseFestivalCity}
					nextStep={this.nextStep}/>
			case 2:
				return <Festival 
					ChooseFestival={this.ChooseFestival}
					previousStep={this.previousStep}
					nextStep={this.nextStep}/>
			case 3:
				return <LineUp
					ChooseALineUp={this.ChooseALineUp}
					previousStep={this.previousStep}
					nextStep={this.nextStep}/>

			case 4: 
				return <SurveyComplete
				Answers = {this.state.Answers}
				ChooseFestivalCity = {this.ChooseFestivalCity}
				ChooseFestival = {this.ChooseFestival}
				ChooseALineUp = {this.ChooseALineUp}/>


			
		}
	}
}

export default FestivalSurvey;
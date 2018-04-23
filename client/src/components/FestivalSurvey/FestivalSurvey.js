import React from "react";
import City from "./City";
import Festival from "./Festival";
import LineUp from "./LineUp";
import './Festival.css';
import SurveyComplete from "./SurveyComplete";
import axios from "axios";

import Loader from 'react-loader-spinner'

// import Results from "./Results";


class FestivalSurvey extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
		step: 1,
		search: '',
		songKickObject: [],
		festival:{},
		lineupAnswers: [],
		sessionEmail: sessionStorage.getItem('user_email'),
		loading: false
		
	  };
  
	}


	/* festivalSearch = (e) => {
		e.preventDefault();
		console.log(this.state.search);

		axios.get(`/api/city/${this.state.search}`)
			.then((response) => {
				console.log(response);
				this.setState({
					songKickObject: response
				})
				console.log(this.state.songKickObject);
			})
			.catch(function (error) {
				console.log(error);
			});

	} */    
	
	/* componentDidUpdate = () => {
		console.log(this.state);
	} */

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


	festivalSearch = (user_city) => {
		console.log(user_city);
		this.setState({
			loading: true,
			step: 2
		});
		axios.get(`/api/city/${user_city}`)
		.then((response) => {
			console.log(response);

					this.setState({
						loading: false,
						step: 2,
						songKickObject: response.data
					});
					this.nextStep();
		})
		.catch(function(error){
			console.log(error);
		});
		console.log('What city is your festival located? ' + user_city);

	}


	ChooseFestival = (fest) => {
		this.setState({
			festival: fest 
		}, () =>  console.log(this.state.festival));
		this.nextStep();
		
	}
  
  ChooseALineUp = (lineUp) => {
		
		this.setState({
			lineupAnswers: lineUp
		}, () => {
			
			console.log(this.state);
			const usersFullSelection = {
				festivalDetails: this.state.festival,
				lineupAnswers: this.state.lineupAnswers,
				sessionEmail: this.state.sessionEmail
			};
			console.log(usersFullSelection);
			axios.put('/api/new_user_festival', usersFullSelection)
			.then((response) =>{
				console.log(response);
				this.props.history.push('/user-profile');
			})
			.catch(error => {
				console.log(error);
			});

		});
		console.log('What artists do you plan to see? ' + lineUp);


	}

/*

	SurveyComplete = (allData) => {
		let tempSurveyAnswers = this.state.Answers;
		tempSurveyAnswers = allData;
		this.setState ({ 
			Answers: tempSurveyAnswers
		});
		console.log('data' + allData);
		//here you can send this.state.surveyAnserws to your DB because the last thing was submitted
	} */

	// Once we have all of the information how to handle the data:::????

  
	render() {
		switch (this.state.step) {
			case 1:
				return <City
					
					nextStep={this.nextStep}
					festivalSearch={this.festivalSearch}/>
				
			case 2:
				return<Loader
					color={'#123abc'}
					loading={this.state.loading}
					type='Bars'
					className='center'

				/>		
			case 3:
				return <Festival 
					ChooseFestival={this.ChooseFestival}
					previousStep={this.previousStep}
					nextStep={this.nextStep}
					songKickData={this.state.songKickObject}
					/>
			case 4:
				return <LineUp
					ChooseALineUp={this.ChooseALineUp}
					previousStep={this.previousStep}
					nextStep={this.nextStep}
					festivalData={this.state.festival}
					songKickData={this.state.songKickObject}
					/>
			default:
				return <div><p>success</p></div>

		}

		
			
		
	}
}

export default FestivalSurvey;
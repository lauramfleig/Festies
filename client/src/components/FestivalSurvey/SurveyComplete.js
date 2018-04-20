import React from "react";
import axios from "axios";
import FestivalSurvey from "./FestivalSurvey";
import City from "./City";
import Festival from "./Festival";

class SurveyComplete extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            value: this.props.Answers,
            renderCityInput:true,

        };

        this.handlechange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value:event.target.value});
    }

     displayCity = (newCity) => {
        let tempValue = this.state.value;
        tempValue.city = newCity;
        this.setState ({ 
            value:tempValue,
            renderCityInput:true
        });
    }
    render () {
        const cityFestivalField = (this.state.renderCityInput)?
        (<City
        displayCity={this.displayCity}

        />):
        (<div>
            <p>User City: {this.props.Answers.city}</p>
        </div>)

        return (
            <form onSubmit={this.handleSubmit}>
            <h3>City:</h3>
            

            </form>

        )
    }
    
}

export default SurveyComplete;



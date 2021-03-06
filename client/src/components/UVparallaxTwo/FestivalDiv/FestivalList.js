import React, { Component } from 'react';
import './FestivalList.css';
import TicketButton from './TicketButton.js';
import MatchesButton from './MatchesButton.js';
import axios from 'axios';
import TiFeather from 'react-icons/lib/ti'

class FestivalList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: sessionStorage.getItem('email')
        };
    }
    
    componentDidMount = () => {


        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get(`/api/user_data/${this.state.userEmail}`)
            .then((response) => {
                this.setState({
                    userData: response
                    
                });
                console.log(this.state.userData);
                
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        
        
        
        return (
            <div>
            {this.state.userData ?
                <ul className="festival-list">
                        {this.state.userData.data[0].festival_data.map((fest, i) => {

                                return ( 
                                        <div className="festival-bestival">
                                            <li key={i} className="festival-name">
                                                <h2>{fest.festivalDetails.displayName}</h2>
                                                <h3>{fest.festivalDetails.date}</h3>
                                                    <TicketButton uri={fest.festivalDetails.uri}/>
                                                    <MatchesButton displayName={fest.festivalDetails.displayName}/>
                                            </li>
                                        </div>)
                            
                          })}
                    
                    
                </ul>
                :
                    <ul className="festival-list">
                <div>Loading...</div>
                    </ul>
            }    
            </div>
        );
    }
}

export default FestivalList;



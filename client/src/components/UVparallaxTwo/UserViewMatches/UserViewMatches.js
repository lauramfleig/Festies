import React, { Component } from 'react';
import axios from 'axios';
import './UserViewMatches.css';



class UserViewMatches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: sessionStorage.getItem('email')
        };
    }

    componentDidMount = () => {


        const email = {
            email: this.state.userEmail
        };
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post('/api/user_data', email)
            .then((response) => {
                this.setState({
                    userData: response,
                    renderUserMatches: true,
                    friendsArray: response.data[0].friends

                });
                console.log(response);

            })
            .catch((error) => {
                console.log(error);
            });

    }



    determineGender = (gender) => {
        if ('male' === gender) {
            return <i className="fa fa-mars"></i>
        } else if ('female' === gender) {
            return <i className="fa fa-venus"></i>
        } else {
            ('other' === gender)
            return <i className="fa fa-intersex"></i>
        }
    }

    render() {


        return (
            
            <div>
            <div className="UV-matches-section">Your Matches
            </div>
            <div className="match-holder-div">
                {this.state.renderUserMatches ?
                    <ul className="match-item">
                        {this.state.friendsArray.map((friend, i) => {

                            return (<li key={i} className="UV-match-card">
                                <div className="card-header">
                                </div>
                                <img className="profile-pic" alt="prof-pic" src={friend.image} />
                                <div className="match-info">
                                    <h2 className="match-name">{friend.name}, {friend.age}</h2>
                                    <div className="gender-holder">
                                        {this.determineGender(friend.gender)}
                                    </div>
                                </div>
                                <div className="bottom-selectors">
                                <div className="UV-artist-title">{friend.festival}
                                </div>
                                    <button className="message-btn"><i className="fa fa-comments"></i></button>
                                    <button className="delete-btn x"><i className="fa fa-user-times"></i></button>
                                </div>
                            </li>)
                        })}
                    </ul>
                    :
                    null
                }
            </div>
            </div>
    
            
           
        );
    }
}

export default UserViewMatches;
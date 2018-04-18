import React, { Component } from 'react';
import axios from 'axios';




class ApiDevelopment extends Component {

    state = {
        user_screen_name: 'sample data' + Date.now(),
        user_name: 'sample data' + Date.now(),
        age: 'sample data' + Date.now(),
        gender: 'sample data' + Date.now(),
        email: 'sample data' + Date.now(),
        about: 'sample data' + Date.now(),
        festie_about: 'sample data' + Date.now(),
        search: 'sample data' + Date.now()
    };

    /* componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        
    } */
apiCall = (e) => {
    e.preventDefault();

    
   axios.get(`/api/city/${this.state.search}`)
    .then((response) => {
        console.log(response);
        this.setState({
            search: ''
        });
    })
    .catch(function(error){
        console.log(error);
    }); 

    /* const songkickQuery = `http://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${this.state.search}`; */

    /* axios.get(songkickQuery)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        }); */
}    

handelInputChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
}

dbEntry = e => {
    e.preventDefault();
    
    axios.post('/api/new_user', {
        user_screen_name: this.state.user_name,
        user_name: this.state.user_name,
        age: this.state.age,
        gender: this.state.gender,
        email: this.state.email,
        about_description: this.state.about,
        favorite_festival_description: this.state.about_festie
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    this.setState({
        user_screen_name: '',
        user_name: '',
        age: '',
        gender: '',
        email: '',
        about: '',
        festie_about: ''
    });

}

    render() {
        /* if (localStorage.getItem('jwtToken')){ */
            return (
                <div>
                
                    <form>
                        <label htmlFor="user_screen_name">Screen Name: </label>
                            <input type="text" id="user_screen_name" name="user_screen_name" onChange={this.handelInputChange} value={this.state.user_screen_name}/>

                        <label htmlFor="user_name">Name: </label>
                            <input type="text" id="user_name" name="user_name" onChange={this.handelInputChange} value={this.state.user_name} />

                        <label htmlFor="age">Age: </label>
                            <input type="text" id="age" name="age" onChange={this.handelInputChange} value={this.state.age} />

                        <label htmlFor="gender">Gender: </label>
                            <input type="text" id="gender" name="gender" onChange={this.handelInputChange} value={this.state.gender} />

                        <label htmlFor="email">Email: </label>
                            <input type="text" id="email" name="email" onChange={this.handelInputChange} value={this.state.email}/>

                        <label htmlFor="about">About You: </label>
                            <textarea type="text" id="about" name="about" onChange={this.handelInputChange} value={this.state.about}/>

                        <label htmlFor="about">Favorite Festival Experience: </label>
                            <textarea type="text" id="about_festie" name="about_festie" onChange={this.handelInputChange} value={this.state.about_festie} />

                        <button type="submit" onClick={this.dbEntry}>submit</button>


                        <input type="text" id="call" name="search" onChange={this.handelInputChange} value={this.state.search} />
                        <button onClick={this.apiCall}>Test Api Call</button>
                    </form>
                </div>
            );
        } /* else {
            return (<Redirect to={"/"} />);
        } */
    /* } */
}

export default ApiDevelopment;
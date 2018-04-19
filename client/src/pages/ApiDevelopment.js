import React, { Component } from 'react';
import axios from 'axios';




class ApiDevelopment extends Component {

    state = {
        user_screen_name: '',
        username:'' ,
        password: '',
        age:'' ,
        gender:'' ,
        email:'' ,
        about:'' ,
        festie_about:'' ,
        search: ''
    };
    
    /* componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        
    } */
    handelInputChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    // festival search by city function for songKick api call

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

}    


// ---------------------- signUpWindow code vvv function for db input
dbRegister = e => {
    e.preventDefault();

    const { email, password } = this.state;

    axios.post('/register', { email, password })
        .then((result) => {
            console.log(result);
            this.props.history.push("user-registration");
        })
        .catch(function (error) {
            console.log(error);
        });
}

// ---------------------- user registration function for final form entry to db vvv

dbEntry = e => {
    e.preventDefault();
    
    axios.post('/api/new_user', {
        user_screen_name: this.state.user_name,
        username: this.state.username,
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
        const { email, password } = this.state;
        /* if (localStorage.getItem('jwtToken')){ */
            return (
                <div>
                    {/* // ---------------------- user registration form vvv */}
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

                        {/* // ---------------------- festival search by city code vvv */}

                        <input type="text" id="call" name="search" onChange={this.handelInputChange} value={this.state.search} />
                        <button onClick={this.apiCall}>Test Api Call</button>

                        {/* // ---------------------- signUpWindow code vvv */}

                        <h2>Register</h2>
                        <label for="inputEmail">Email address</label>
                        <input type="email" placeholder="Email address" name="email" value={email} onChange={this.handelInputChange} required />
                        <label for="inputPassword">Password</label>
                        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handelInputChange} required />
                        <button type="submit" onClick={this.dbRegister}>Register</button>

                    </form>
                </div>
            );
        } /* else {
            return (<Redirect to={"/"} />);
        } */
    /* } */
}

export default ApiDevelopment;
import React from 'react';
import './Registration.css';

class UserRealName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.CreateUserName(this.state.value);
        this.props.nextStep();
    }

    render() {
        return (
            <div className="UserRealNameForm">
                <form onSubmit={this.handleSubmit}>
                    <label className="labelForm">
                        First and Last Name:
              <br></br>
                        <input type="text" value={this.state.value} onChange={this.handleChange} className="inputBox" />
                    </label>
                    <br></br>
                    <input type="submit" value="Submit" className="submitButton" />
                </form>
            </div>
        );
    }
}

export default UserRealName;
import React, { Component } from 'react';
import axios from 'axios';


class festieMatches extends Component {

    constructor(props) {
        super(props);

        this.state ={
            loading: true,
        };

    }

    
    componentWillMount() {
        const matchesQuery = {
            displayName: sessionStorage.getItem('currentFestival')
        };
        axios.post('/api/find_matches', matchesQuery)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                <p>success</p>
            </div>
        );
    }
}

export default festieMatches;
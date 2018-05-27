import React, { Component } from 'react';
import './SearchFestival.css'

class SearchFestival extends Component {
    render() {
        return (
            <div className="search-festival-box">
                <h1 className="search-fest-header">Search Festivals By City</h1>
                <a href="/survey"><button className="search-fest-btn"><i class="fa fa-search" aria-hidden="true"></i>GO!</button></a>
                
            </div>
        );
    }
}

export default SearchFestival;
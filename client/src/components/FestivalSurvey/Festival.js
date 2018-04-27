
import React, { Component } from 'react';
 

class Festival extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: ''
      
    };
    
    
  }
 


  handleSubmit = (event) => {
    event.preventDefault();
    
    
    /* console.log(this.props); */
    console.log(event.target.name);
    console.log(event.target.getAttribute('data-displayName'));
    const festInfo = {
      displayName: event.target.getAttribute('data-displayname'),
      date: event.target.getAttribute('data-date'),
      uri: event.target.getAttribute('data-uri')
    };
console.log(festInfo);
    this.props.ChooseFestival(festInfo);


  }
  
  render() {
    const liStyle = {
      display: "flex"
    }

    const spanStyle = {
      flex: "4"
    }

    const buttonStyle = {
      flex: "1"
    }
    console.log(this.props.songKickData);
    const skData = this.props.songKickData;
    return (
      <div className="lineup-list-holder">
          <ul className="festival-ul">
          {skData.map((data, i) => (<li key={i} style={liStyle}>
          <span className="span-lineup" style={spanStyle}>{data.displayName}</span>
          <button className="lineup-buttons"
          style={buttonStyle}
          onClick={this.handleSubmit} 
          data-displayname={data.displayName} 
          data-date={data.start.date}
          data-uri={data.uri} 
          >Select</button></li>))}
          </ul>
      </div>
    );
  }
}

export default Festival; 
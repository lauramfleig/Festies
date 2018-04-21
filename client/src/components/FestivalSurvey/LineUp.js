import React from "react";

  class LineUp  extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
      handleChange(event) {
        this.setState({value: event.target.value});
      }
  
      handleSubmit(event) {
        event.preventDefault();

        this.props.ChooseALineUp(this.state.value);
        this.props.nextStep();
      }
  
      render() {
        return (
           <form onSubmit={this.handleSubmit}>
             <label>
               Choose which performances you plan on attending

               {/* { festivals.map(festivalInfo => (<Card {...friend} />)) }
               <input type="text" value={...friend} onChange={this.handleChange} > */}
             </label>
             <input type="submit" value="Submit" />
           </form>
        
        );
      }
    }



export default LineUp.js
import React from "react";
import './LineUp.css'

  class LineUp  extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          lineupSelection: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
      handleChange(event) {
        this.setState({value: event.target.value});
      }
  
      handleSubmit(event) {
        event.preventDefault();
        const choices = this.choosenLineup();
        this.props.ChooseALineUp(choices);
        this.props.nextStep();
      }
  
      lineupGenerator = () => {
        const festivalData = this.props.festivalData;
        const skData = this.props.songKickData;
        let fest;
        let lineUp = [];

        for (let p = 0; p < skData.length; p++) {
          if (skData[p].displayName === festivalData.displayName) {
            fest = skData[p];
          }
        }
        for (let l = 0; l < fest.performance.length; l++) {
          lineUp.push(fest.performance[l].displayName);
        }

        return lineUp;
        
      }

      choosenLineup = () => {

        const inputMatches = document.querySelectorAll(".lineupInput:checked");
       
        let matches = [];

        for (let a = 0; a < inputMatches.length; a++) {
          matches.push(inputMatches[a].value);
        }
        
        return matches;
      }
      render() {
        
        const lineUp = this.lineupGenerator();

        return (
           <div>
           <form onSubmit={this.handleSubmit}>
             

              

              <h2 className="choose-artist-header">Choose Your Favorite 5 Performers for This Festival</h2>
              <ul className="artists">

                
                {lineUp.map((artist, i) => {return <li key={i}><input className={"lineupInput"} type="checkbox" value={artist} />{artist}</li>})}
                </ul>
             
             <input type="submit" value="Submit" />
           </form>
           </div>

        
        );
      }
    }

export default LineUp;


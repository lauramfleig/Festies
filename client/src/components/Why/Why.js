import React, { Component } from 'react';
import './Why.css';
import Fade from 'react-reveal/Fade';


class Why extends Component {

    render() {
        return (
            <Fade right duration={1000}>
                <div className="why">
                    <h1 className="why-title">Find Festival Companions</h1>
                    <div className="box-holder">
                        <Fade right>
                        <div className="whybox search-div">
                            <div className="icon-holder">
                                <i className="fa fa-search" />
                                <h4 className="whybox-header">Search</h4>
                            </div> 
                            <div className="whybox-text">Festivals, Lineups, People</div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="whybox chat-div">
                            <div className="icon-holder">
                                <i className="fa fa-comments-o" />
                                <h4 className="whybox-header">Chat</h4>
                            </div>
                            <div className="whybox-text">Privately or In Groups</div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="whybox share-div">
                            <div className="icon-holder">
                                <i class="fa fa-users" />
                                <h4 className="whybox-header">Share</h4>
                            </div>
                            <div className="whybox-text">Plans, Tips, Resources, Experinces</div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Why;
import React from 'react';
import './TicketButton.css'

const TicketButton = (props) => {
    return (
        <div className="ticket-btn-container">
            <a href={props.uri} target="_blank"><button className="ticket-btn">Buy Tickets</button></a>
        </div>
    );
};

export default TicketButton;
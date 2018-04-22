import React from 'react';
import './TicketButton.css'

const TicketButton = (props) => {
    return (
        <div className="ticket-btn-container">
            <button className="ticket-btn" onClick={props.handleClick}>Buy Tickets</button>
        </div>
    );
};

export default TicketButton;
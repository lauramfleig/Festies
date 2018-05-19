import React from "react";
/* import ImageUrl from "./ImageUrl"; */
import "./ErrorModal.css";

const ErrorModal = (props) => {        
    return (
        <div className="error-modal">
            <h1 className="modal-text">Error! {props.message}</h1>
            <button className="ErrorButton" onClick={props.hideModal}>Ok</button>
        </div>
        );
}



export default ErrorModal;
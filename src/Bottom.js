import React from 'react';
import "./css/App.css";
import './css/bottom.css';


const Bottom =(props)=> {
    return(
      <div className="bottom">
        <div onClick={props.toggleCvModal}>
            <span>Continue shopping</span>
          </div>
        <div onClick={props.toggleCvModal}>
          <img src="./surf.svg"/>
          <span>Checkout</span>
        </div>
      </div>
    )
}

export default Bottom;

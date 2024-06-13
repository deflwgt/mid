/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./newrelease.css";
import BackToTop from "./back";

const NewRelease = (props) => {
  return (
    <div className="animes" onClick={props.onClick}>
     <img src={props.image} alt="" />
      <div className="info">
        <p className="episode">Episode {props.episode}</p>
        <p className="name">{props.name}</p>

      </div>

<BackToTop/>

      <div>


      </div>
    </div>  
    



  );
};

export default NewRelease;

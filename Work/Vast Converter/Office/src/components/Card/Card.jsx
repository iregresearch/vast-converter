/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CardIcons } from "../../icons/CardIcons";
import "./style.css";

export const Card = ({
  buttonText = "Speech to Text",
  descriptionText = "Convert live speech, URL-linked MP3s, and uploaded audio files into text effortlessly with our advanced speech recognition technology. Ideal for transcribing meetings, lectures, and more.",
  icon = <CardIcons className="card-icons" color="url(#paint0_linear_7_1409)" />,
  cardButtonClassName,
}) => {
  return (
    <div className="card">
      <div className="frame">{icon}</div>
      <div className="card-button-wrapper">
        <div className={`card-button ${cardButtonClassName}`}>
          <div className="speech-to-text">{buttonText}</div>
        </div>
      </div>
      <p className="convert-live-speech">{descriptionText}</p>
    </div>
  );
};

Card.propTypes = {
  buttonText: PropTypes.string,
  descriptionText: PropTypes.string,
};

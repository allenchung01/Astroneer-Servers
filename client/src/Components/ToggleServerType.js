import React, { useState } from "react";
import "../Styles/ToggleServerType.css";

export default function ToggleServerType(props) {
  const { selectedButton, updateServerType } = props;

  const [nitradoPopUpIsVisible, setNitradoPopUpIsVisible] = useState(false);
  const [gportalPopUpIsVisible, setGportalPopUpIsVisible] = useState(false);
  const [selfHostPopUpIsVisible, setSelfHostPopUpIsVisible] = useState(false);

  const NITRADO = "Nitrado";
  const GPORTAL = "GPortal";
  const SELF_HOST = "Self Host";

  return (
    <div className="toggle-server-type">
      {nitradoPopUpIsVisible ? <p className="hint-popup">Nitrado</p> : null}
      <button
        className={
          selectedButton === NITRADO ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerType(NITRADO);
        }}
        onMouseEnter={() => {
          setNitradoPopUpIsVisible(true);
        }}
        onMouseLeave={() => {
          setNitradoPopUpIsVisible(false);
        }}
      >
        N
      </button>
      <div id="toggle-spacing"></div>
      {gportalPopUpIsVisible ? <p className="hint-popup">GPortal</p> : null}
      <button
        className={
          selectedButton === GPORTAL ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerType(GPORTAL);
        }}
        onMouseEnter={() => {
          setGportalPopUpIsVisible(true);
        }}
        onMouseLeave={() => {
          setGportalPopUpIsVisible(false);
        }}
      >
        GP
      </button>
      <div id="toggle-spacing"></div>
      {selfHostPopUpIsVisible ? <p className="hint-popup">Self Host</p> : null}
      <button
        className={
          selectedButton === SELF_HOST ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerType(SELF_HOST);
        }}
        onMouseEnter={() => {
          setSelfHostPopUpIsVisible(true);
        }}
        onMouseLeave={() => {
          setSelfHostPopUpIsVisible(false);
        }}
      >
        SH
      </button>
    </div>
  );
}

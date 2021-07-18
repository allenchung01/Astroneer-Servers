import React from "react";
import "../Styles/ToggleServerType.css";

export default function ToggleServerType(props) {
  const { selectedButton, updateServerType } = props;

  const NITRADO = "Nitrado";
  const GPORTAL = "GPortal";
  const SELF_HOST = "Self Host";

  return (
    <div className="toggle-server-type">
      <button
        className={
          selectedButton === NITRADO ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerType(NITRADO);
        }}
      >
        N
      </button>
      <div id="toggle-spacing"></div>
      <button
        className={
          selectedButton === GPORTAL ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerType(GPORTAL);
        }}
      >
        GP
      </button>
      <div id="toggle-spacing"></div>
      <button
        className={
          selectedButton === SELF_HOST ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerType(SELF_HOST);
        }}
      >
        SH
      </button>
    </div>
  );
}

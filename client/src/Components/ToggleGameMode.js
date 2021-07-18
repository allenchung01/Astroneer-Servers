import React, { useState } from "react";
import "../Styles/ToggleGameMode.css";

export default function ToggleGameMode(props) {
  const { selectedButton, updateServerGameMode } = props;

  const ADVENTURE = "Adventure";
  const CREATIVE = "Creative";

  return (
    <div className="toggle-game-mode">
      <button
        className={
          selectedButton === ADVENTURE ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerGameMode(ADVENTURE);
        }}
      >
        Adventure
      </button>
      <div id="toggle-spacing"></div>
      <button
        className={
          selectedButton === CREATIVE ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerGameMode(CREATIVE);
        }}
      >
        Creative
      </button>
    </div>
  );
}

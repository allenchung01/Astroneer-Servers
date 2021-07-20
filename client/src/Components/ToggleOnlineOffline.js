import React from "react";
import "../Styles/ToggleOnlineOffline.css";

export default function ToggleOnlineOffline(props) {
  const { selectedButton, updateServerStatus } = props;

  const ONLINE = true;
  const OFFLINE = false;

  return (
    <div className="toggle-online-offline">
      <button
        className={
          selectedButton === ONLINE ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerStatus(ONLINE);
        }}
      >
        Online
      </button>
      <div id="toggle-spacing"></div>
      <button
        className={
          selectedButton === OFFLINE ? "selected-button" : "unselected-button"
        }
        onClick={() => {
          updateServerStatus(OFFLINE);
        }}
      >
        Offline
      </button>
    </div>
  );
}

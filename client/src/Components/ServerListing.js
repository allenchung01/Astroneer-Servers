import { useState } from "react";

import "../Styles/ServerListing.css";

function ServerListing(props) {
  const { listing } = props;
  const [popUpIsVisible, setPopUpIsVisible] = useState(false);

  return (
    <div className="on-load-animation">
      <div
        className="server-listing"
        onMouseEnter={() => {
          setPopUpIsVisible(true);
        }}
        onMouseLeave={() => {
          setPopUpIsVisible(false);
        }}
      >
        {props.children}
        <div
          className={
            popUpIsVisible
              ? "popup-description-visible"
              : "popup-description-hidden"
          }
        >
          <h3 id="online-status">
            Status:{" "}
            <b>
              <span
                className={
                  listing.server_status ? "online-label" : "offline-label"
                }
              >
                {listing.server_status ? "Online" : "Offline"}
              </span>
            </b>
          </h3>
          <p className="server-description">{listing.server_description}</p>
        </div>
        <div className="server-heading">
          <span
            className={listing.server_status ? "dot-green" : "dot-grey"}
          ></span>
          <h2>{listing.server_name}</h2>
        </div>
        <h3>
          Owner: <b className="info">{listing.owner_name}</b>
        </h3>
        <h3>
          Server URL: <b className="info">{listing.server_url}</b>
        </h3>
        <h3>
          Password:{" "}
          <b className="info">
            {listing.server_password ? listing.server_password : "N/A"}
          </b>
        </h3>
        <h3>
          Game Mode: <b className="info">{listing.server_game_mode}</b>
        </h3>
        <h3>
          Region: <b className="info">{listing.server_region}</b>
        </h3>
        <h3>
          Server Type: <b className="info">{listing.server_type}</b>
        </h3>
      </div>
    </div>
  );
}

export default ServerListing;

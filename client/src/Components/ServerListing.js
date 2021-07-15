import { useState } from "react";

import "../Styles/ServerListing.css";

function ServerListing(props) {
  const { listing } = props;
  const [popUpIsVisible, setPopUpIsVisible] = useState(false);

  return (
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
        <h3>
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
        <p>{listing.server_description}</p>
      </div>
      <div className="server-heading">
        <span
          className={listing.server_status ? "dot-green" : "dot-grey"}
        ></span>
        <h2>{listing.server_name}</h2>
      </div>
      <h3>
        Owner: <b>{listing.owner_name}</b>
      </h3>
      <h3>
        Server URL: <b>{listing.server_url}</b>
      </h3>
      {listing.server_password ? (
        <h3>
          Password: <b>{listing.server_password}</b>
        </h3>
      ) : null}
      <h3>
        Game Mode: <b>{listing.server_game_mode}</b>
      </h3>
      <h3>
        Region: <b>{listing.server_region}</b>
      </h3>
      <h3>
        Server Type: <b>{listing.server_type}</b>
      </h3>
    </div>
  );
}

export default ServerListing;

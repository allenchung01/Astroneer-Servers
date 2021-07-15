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
        <p>{listing.server_description}</p>
      </div>
      <div className="server-heading">
        <span
          className={listing.server_status ? "dot-green" : "dot-grey"}
        ></span>
        <h2>{listing.server_name}</h2>
      </div>
      <h3>Owner: {listing.owner_name}</h3>
      <h3>Server URL: {listing.server_url}</h3>
      {listing.server_password ? (
        <h3>Password: {listing.server_password}</h3>
      ) : null}
      <h3>Region: {listing.server_region}</h3>
      <h3>Server Type: {listing.server_type}</h3>
      <h3>Status: {listing.server_status ? "Online" : "Offline"}</h3>
    </div>
  );
}

export default ServerListing;

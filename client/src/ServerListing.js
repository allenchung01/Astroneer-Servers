import { useState } from "react";
import "./ServerListing.css";

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
      <h3>IP Address: {listing.server_url}</h3>
    </div>
  );
}

export default ServerListing;

import "./ServerListing.css";

function ServerListing(props) {
  const { listing } = props;
  return (
    <div className="server-listing">
      <div className="server-heading">
        <span
          className={listing.server_status ? "dot-green" : "dot-grey"}
        ></span>
        <h2>{listing.server_name}</h2>
      </div>
      <h3>Owner: {listing.owner_name}</h3>
      <h3>IP Address: {listing.ip_address}</h3>
    </div>
  );
}

export default ServerListing;

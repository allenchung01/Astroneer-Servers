import React, { useState, useEffect } from "react";

import ServerListing from "./ServerListing.js";
import AddServerForm from "./AddServerForm.js";
import Paginate from "./Paginate.js";
import "../Styles/ServerListing.css";
import "../Styles/Home.css";
import "../Styles/AddServerForm.css";
import "../Styles/Paginate.css";
import { getServers } from "../api/servers.js";
import store from "../redux/store.js";
import { updateTab } from "../redux/User/userActions";
import FilterButton from "./FilterButton.js";

function Home() {
  const [serverListings, setServerListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const listingsPerPage = 9;
  const listingsVisited = pageNumber * listingsPerPage;
  const currentPageListings = serverListings
    .slice(listingsVisited, listingsVisited + listingsPerPage)
    .map((listing, index) => {
      return <ServerListing listing={listing} key={index} />;
    });
  const pageCount = Math.ceil(serverListings.length / listingsPerPage);

  useEffect(() => {
    store.dispatch(updateTab({ tab: "Home" }));
    getServers(setServerListings);
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="main-content">
      <div className="server-list">
        <h2 id="welcome-message">
          <span id="welcome">Welcome!</span> Below you can find servers to join.
          Click on a server for more information.
        </h2>
        <div id="astroneer-servers-header">
          <h1>Astroneer Servers</h1>
          <FilterButton />
        </div>
        <div id="server-grid">{currentPageListings}</div>
        <Paginate pageCount={pageCount} changePage={changePage} />
      </div>
      <div className="server-form-section">
        <AddServerForm
          serverListings={serverListings}
          setServerListings={setServerListings}
        />
      </div>
    </div>
  );
}

export default Home;

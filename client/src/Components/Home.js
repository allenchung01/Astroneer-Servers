import React, { useState, useEffect } from "react";

import ServerListing from "./ServerListing.js";
import AddServerForm from "./AddServerForm.js";
import Paginate from "./Paginate.js";
import "../Styles/ServerListing.css";
import "../Styles/Home.css";
import "../Styles/AddServerForm.css";
import "../Styles/Paginate.css";
import { getServers } from "../api/servers.js";

function Home() {
  const [serverListings, setServerListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const listingsPerPage = 12;
  const listingsVisited = pageNumber * listingsPerPage;
  const currentPageListings = serverListings
    .slice(listingsVisited, listingsVisited + listingsPerPage)
    .map((listing, index) => {
      return <ServerListing listing={listing} key={index} />;
    });
  const pageCount = Math.ceil(serverListings.length / listingsPerPage);

  useEffect(() => {
    getServers(setServerListings);
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="main-content">
      <h1>Astroneer Servers</h1>
      {currentPageListings}
      <Paginate pageCount={pageCount} changePage={changePage} />
      <AddServerForm
        serverListings={serverListings}
        setServerListings={setServerListings}
      />
    </div>
  );
}

export default Home;

import "./App.css";
import "./ServerListing.js";
import "./ServerListingForm.css";
import "./RoundedTriangle.css";
import "./Paginate.css";
import React, { useState, useEffect } from "react";
import ServerListing from "./ServerListing";
import axios from "axios";
import ReactPaginate from "react-paginate";

function App() {
  const [serverListings, setServerListings] = useState([]);
  const [serverName, setServerName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [serverUrl, setServerUrl] = useState("");
  const [serverDescription, setServerDescription] = useState("");
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
    axios
      .get("https://astroneer-servers.herokuapp.com/api/servers")
      .then((response) => {
        setServerListings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const postServer = () => {
    const listing = {
      server_name: serverName,
      owner_name: ownerName,
      server_url: serverUrl,
      server_description: serverDescription,
      server_status: true,
    };
    axios
      .post("https://astroneer-servers.herokuapp.com/api/servers", listing)
      .then((result) => {
        setServerListings([...serverListings, listing]);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <nav>
        <ul className="nav-bar">
          <div className="tabs">
            <li>HOME</li>
            <a href="https://astroneer.space/dedicatedserver/">
              <li>OFFICIAL SITE</li>
            </a>
            <li>MY SERVERS</li>
          </div>
          <div className="triangle"></div>
          <h1>ASTRONEER-SERVERS.com</h1>
        </ul>
      </nav>
      <div className="main-content">
        <h1>Joinable Servers</h1>
        {currentPageListings}
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination-container"
          previousLinkClassName="previous-link"
          nextLinkClassName="next-link"
          disabledClassName="pagination-disabled"
          activeClassName="pagination-active"
          pageClassName="pagination-page"
        />
        <form onSubmit={postServer}>
          <h1>Add a Server</h1>
          <div className="inputs">
            <div className="left-inputs">
              <input
                onChange={(event) => {
                  setServerName(event.target.value);
                }}
                placeholder="server name"
                required
              ></input>
              <input
                onChange={(event) => {
                  setOwnerName(event.target.value);
                }}
                placeholder="owner name"
                required
              ></input>
              <input
                onChange={(event) => {
                  setServerUrl(event.target.value);
                }}
                placeholder="server url"
                required
              ></input>
            </div>
            <div className="right-inputs">
              <textarea
                onChange={(event) => {
                  setServerDescription(event.target.value);
                }}
                placeholder="server description..."
                required
              ></textarea>
            </div>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default App;

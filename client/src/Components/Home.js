import React, { useState, useEffect } from "react";
import axios from "axios";

import ServerListing from "./ServerListing.js";
import AddServerForm from "./AddServerForm.js";
import Paginate from "./Paginate.js";
import "../Styles/ServerListing.css";
import "../Styles/Home.css";
import "../Styles/AddServerForm.css";
import "../Styles/Paginate.css";
import { auth } from "../firebase.js";
import firebase from "firebase/app";

//const url = "https://astroneer-servers.herokuapp.com";
//const url = "http://localhost:3001";

function Home() {
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
      .get("http://localhost:3001/api/servers")
      .then((response) => {
        console.log(auth.currentUser);
        setServerListings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const postServer = async () => {
    if (!auth.currentUser) {
      return;
    }
    const token = await auth.currentUser.getIdToken();

    console.log(token);
    const listing = {
      server_name: serverName,
      owner_name: ownerName,
      server_url: serverUrl,
      server_description: serverDescription,
      server_status: true,
    };
    axios
      .post("http://localhost:3001/api/servers", listing, {
        headers: { authorization: `Bearer ${token}` },
      })
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
    <div className="main-content">
      <h1>Joinable Servers</h1>
      {currentPageListings}
      <Paginate pageCount={pageCount} changePage={changePage} />
      <AddServerForm
        postServer={postServer}
        setServerName={setServerName}
        setOwnerName={setOwnerName}
        setServerUrl={setServerUrl}
        setServerDescription={setServerDescription}
      />
      <h1>Log Out</h1>
      <input
        type="button"
        onClick={() => {
          firebase
            .auth()
            .signOut()
            .then(
              function () {
                console.log("signed out");
              },
              function (error) {
                console.log(error);
              }
            );
        }}
      />
    </div>
  );
}

export default Home;

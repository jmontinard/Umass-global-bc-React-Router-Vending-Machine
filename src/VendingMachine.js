import React from "react";
import { Link } from "react-router-dom";
import chipsImage from "./assets/images/chips.png";
import cookiesImage from "./assets/images/cookies.png";
import colaImage from "./assets/images/cola.png";

const VendingMachine = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1618506557292-ec1862b3c506?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D)`,
    backgroundSize: "cover",
    color: "white",
  };

  const linkStyle = {
    margin: "1rem",
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "15px",
    textDecoration: "none",
    color: "black",
  };
  const listItemStyle = {
    margin: "3em 0",
  };

  
  return (
    <div style={style}>
      <h1>Welcome to the Vending Machine!</h1>
      <h2>Select a snack:</h2>
      <ul>
        <li style={listItemStyle}>
          <Link
            style={linkStyle}
            to={{ pathname: "/snack/chips", state: { image: chipsImage } }}
          >
            Chips
            {/* <img src={chipsImage} /> */}
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link
            style={linkStyle}
            to={{ pathname: "/snack/cookies", state: { image: cookiesImage } }}
          >
            Cookies
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link
            style={linkStyle}
            to={{ pathname: "/snack/coca-cola", state: { image: colaImage } }}
          >
            Coca Cola
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default VendingMachine;
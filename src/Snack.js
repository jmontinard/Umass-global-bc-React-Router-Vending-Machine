import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import chipsImage from "./assets/images/chips.png";
import cookiesImage from "./assets/images/cookies.png";
import colaImage from "./assets/images/cola.png";

const Snack = () => {
  let { snackName } = useParams();

  const [count, setCount] = useState(0);
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

  const imgStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "15px",
    objectFit: "cover",
    animation: "spin 2s linear infinite", 
  };

  const counterStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "15px",
    padding: "1rem",
  };

  const buttonStyle = {
    margin: "0 1rem",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#333",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  };
  const spanStyle = {
    color: "black",
  };

  // Map snack names to their respective images
  const snackImages = {
    chips: chipsImage,
    cookies: cookiesImage,
    "coca-cola": colaImage,
  };

  return (
    <div style={style}>
      <h1>You selected: {snackName}</h1>
      <img style={imgStyle} src={snackImages[snackName]} alt={snackName} />
      <div style={counterStyle}>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>
          -
        </button>
        <span>{count}</span>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <Link style={linkStyle} to="/">
        Go back
      </Link>
    </div>
  );
};

export default Snack;

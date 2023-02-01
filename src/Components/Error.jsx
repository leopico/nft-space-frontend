import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2>Oops! Page not found.</h2>
      <h1 className="error-1">404</h1>
      <p>We can't find the page you're looking for.</p>
      <Link className="error-2" to="/">
        Go back Dashboard
      </Link>
    </div>
  );
};

export default Error;

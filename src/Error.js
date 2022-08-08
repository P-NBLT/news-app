import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <h3>The page you are looking for doesn't exist or has been removed.</h3>
      <button>
        <Link to="/">Back to the Home Page</Link>
      </button>
    </div>
  );
};

export default Error;

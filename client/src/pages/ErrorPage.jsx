import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      Error 404: Page Not Found
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ErrorPage;

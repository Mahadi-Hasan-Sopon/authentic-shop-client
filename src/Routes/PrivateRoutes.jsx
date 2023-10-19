import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner/LoadingSpinner";

function PrivateRoutes({ children }) {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login" />;
  }
}

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;

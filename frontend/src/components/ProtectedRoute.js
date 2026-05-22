import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  // GET TOKEN
  const token = localStorage.getItem("token");


  // IF TOKEN NOT FOUND
  if (!token) {

    return <Navigate to="/login" />;
  }


  // IF TOKEN EXISTS
  return children;
}

export default ProtectedRoute;
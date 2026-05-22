import { Navigate } from "react-router-dom";


function AdminRoute({ children }) {

  // GET USER
  const user = JSON.parse(

    localStorage.getItem("user")
  );


  // CHECK ROLE
  if (!user || user.role !== "admin") {

    return <Navigate to="/" />;
  }


  // ALLOW ACCESS
  return children;
}

export default AdminRoute;
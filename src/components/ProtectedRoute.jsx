import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import authContext from "../contextApi/authContext";

const ProtectedRoute = () => {
  //logic backend request->token->cookie   
  const authData = useContext(authContext);
  return <>{authData.auth ? <Outlet /> : <Navigate to={"/login"} />}</>;
}; 

export default ProtectedRoute;

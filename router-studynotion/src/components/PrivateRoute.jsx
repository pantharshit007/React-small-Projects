import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({isLoggedIn, children}) {
    // const navigate = useNavigate();
    // if you are logged in then only you can go to the dashboard
  if (isLoggedIn) {
    return children
  }else{
    return <Navigate to="/login" />;

  }
}

export default PrivateRoute
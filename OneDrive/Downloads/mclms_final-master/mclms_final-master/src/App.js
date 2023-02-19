import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UserRoute from "./Router/UserRoute";
import AdminRoute from "./Router/AdminRoute";
import Dashboard from "./adminComponents/Dashboard";
import { authCheckState } from "./app/reducer/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Public from "./Router/Public";

function App() {
  const { token, isAuth, isAdmin, verified } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
    // eslint-disable-next-line
  }, [token]);

  return (
    <Router>
      <div className="App">
        {/* {isAdmin && isAuth? <Dashboard><AdminRoute/></Dashboard>:null} 
       {!isAdmin && isAuth? <UserRoute verified={verified}/>: null}
       {!isAuth && !isAdmin?<Public/>:null} */}

        {isAuth ? (
          isAdmin ? (
            <Dashboard>
              <AdminRoute />
            </Dashboard>
          ) : (
            <UserRoute verified={verified} token={token} />
          )
        ) : (
          <Public />
        )}
      </div>
    </Router>
  );
}

export default App;

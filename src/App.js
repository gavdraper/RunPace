import './App.css';
import React, { useEffect } from 'react';
//import { useState } from 'react'
import PaceConvertor from './components/Pages/PaceConvertor'
import RacePace from './components/Pages/RacePace'
import PWA from './components/Pages/PWA'
import Fuel from './components/Pages/Fuel'
// import Login from './components/Controls/Security/Login'
// import Logout from './components/Controls/Security/Logout'
import {
  HashRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {

  useEffect(() => {
    document.title = "Pace Calculator V2";
  }, []);

  //let [userObj, setUserObj] = useState(null);

  return (
    <HashRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            Pace Calculator
            {/* <Login User={userObj} UpdateUser={setUserObj} />
            <Logout User={userObj} UpdateUser={setUserObj} /> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className={"nav-item active"}>
                  <NavLink
                    to="/Pace"
                    activeClassName="active"
                    className="nav-link"
                  >Convertor</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Race"
                    activeClassName="active"
                    className="nav-link"
                  >Race Pace</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Fuel"
                    activeClassName="active"
                    className="nav-link"
                  >Fuel</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="App">
          <Switch>
            <Route path="/PWA">
              <PWA />
            </Route>

            <Route path="/Race">
              <RacePace />
            </Route>
            <Route path="/Fuel">
              <Fuel />
            </Route>
            <Route path={["/Pace", "/"]}>
              <PaceConvertor />
            </Route>
          </Switch>
        </div>
      </div >

    </HashRouter >
  );
}

export default App;

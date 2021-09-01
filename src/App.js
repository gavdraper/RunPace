import './App.css';
import PaceConvertor from './components/Pages/PaceConvertor'
import RacePace from './components/Pages/RacePace'
import PWA from './components/Pages/PWA'
import {
  HashRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
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
                  >Pace Convertor</NavLink>
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
                    to="/PWA"
                    activeClassName="active"
                    className="nav-link"
                  >PWA</NavLink>
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

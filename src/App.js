import './App.css';
import PaceConvertor from './components/Pages/PaceConvertor'
import RacePace from './components/Pages/RacePace'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                  >Pace</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Race"
                    activeClassName="active"
                    className="nav-link"
                  >Race</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="App">
          <Switch>
            <Route path="/Race">
              <RacePace />
            </Route>
            <Route path="/Pace">
              <PaceConvertor />
            </Route>
          </Switch>
        </div>
      </div >

    </Router >
  );
}

export default App;

import './App.css';
import PaceConvertor from './components/PaceConvertor'
import RacePace from './components/RacePace'
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
          <a className="navbar-brand" href='/'>Pacer</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={"nav-item active"}>
                <NavLink
                  to="/"
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
        </nav>
        <div className="App">
          <Switch>
            <Route path="/Race">
              <RacePace />
            </Route>
            <Route path="/">
              <PaceConvertor />
            </Route>
          </Switch>
        </div>
      </div >
    </Router >
  );
}

export default App;

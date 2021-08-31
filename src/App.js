import './App.css';
import PaceConvertor from './components/PaceConvertor'
import RacePace from './components/RacePace'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
              <li className="nav-item active">
                <Link to="/Pace" className="nav-link">Pace</Link>
              </li>
              <li className="nav-item">
                <Link to="/Race" className="nav-link">Race</Link>
              </li>
            </ul>
          </div>
        </nav>


        <div className="App">


          <Switch>
            <Route path="/Pace">
              <PaceConvertor />
            </Route>
            <Route path="/Race">
              <RacePace />
            </Route>
          </Switch>

        </div>
      </div>
    </Router >
  );
}

export default App;

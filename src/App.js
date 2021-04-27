import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './Component/CountryDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/CountryDetails/:name'>
            <CountryDetails></CountryDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import { Home } from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Saved } from './pages/Saved';
function App() {
  return (
    <div className="App">

      {/* <Home /> */}
      {/* <SignUp /> */}



      < Router>
        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

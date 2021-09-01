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
import { StoreProvider } from './Context';
function App() {
  return (
    <div className="App">
      <StoreProvider>
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
      </StoreProvider>
    </div>
  );
}

export default App;

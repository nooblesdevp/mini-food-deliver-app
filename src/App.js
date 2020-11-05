import "./App.css";
import Dashboard from "./Page/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dinner from "./Components/Dinner";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/dinner">
            <Dinner />
          </Route>
          <Route path="/lunch">
            <Dashboard />
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

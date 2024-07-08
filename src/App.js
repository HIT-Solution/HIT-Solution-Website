import "./App.css";
import DevelopmentProjected from "./Pages/Home/DevelopmentProjected";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/developmentprojected">
            <DevelopmentProjected />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

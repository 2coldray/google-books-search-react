import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./containers/Saved/Saved";
import Search from "./containers/Search/Search";


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./containers/Saved/Saved";
import Search from "./containers/Search/Search";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/" component={Search} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

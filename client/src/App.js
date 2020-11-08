import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./containers/Saved/Saved";
import Search from "./containers/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Jumbotron />
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

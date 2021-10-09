import { React, useEffect } from "react";
import SearchField from "./components/search"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {

  useEffect(() => {
    document.title = "Cocktail";
  }, []);

  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/">
            <SearchField />
          </Route>
          <Route path="*">
            <h1 className="text-center">404</h1>
            <SearchField />
          </Route>
        </Switch>
      </div>

    </Router>


  );
}

export default App;
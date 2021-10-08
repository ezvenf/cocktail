import { React, useEffect } from "react";
import SearchField from "./components/search"

const App = () => {

  useEffect(() => {
    document.title = "Cocktail";
  }, []);

  return <div className="search">
    <a href="/"><h1>Cocktail</h1></a>
    <SearchField />
  </div>;
}

export default App;
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBanner from "./Blah";
import MovieList from "./Movies";

class Welcome extends React.Component {
  render() {
    return <h1>Joel's Favorite Movies </h1>;
  }
}

class Conclusion extends React.Component {
  render() {
    return <p>Movie Collection</p>;
  }
}

function App() {
  return (
    <div className="App">
      <TopBanner />
      <MovieList />
    </div>
  );
}
export default App;

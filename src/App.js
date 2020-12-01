import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeButton from "./components/LikeButton";
import ClickCounter from "./components/ClickCounter";

function App() {
  const [likeButtonClickCount, setLikeButtonClickCount] = useState(0);

  const incrementClickCount = () => {
    setLikeButtonClickCount(likeButtonClickCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload the page.
        </p>
        <br />
        <LikeButton incrementClickCount={incrementClickCount} />
        <br />
        <ClickCounter likeButtonClickCount={likeButtonClickCount} />
      </header>
    </div>
  );
}

export default App;

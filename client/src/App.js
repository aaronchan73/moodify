import react, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import SongDisplay from "./components/SongDisplay";
import "./index.css";
import React, { Component } from "react";
import FileUpload from "./components/FileUpload";

function App() {
  const [list, setList] = useState(false);

  return (
    <div className="App" class="container">
      <div class="shape-blob" />
      <div class="shape-blob one" />
      <div class="shape-blob two" />
      <div class="shape-blob three" />
      <div class="shape-blob four" />
      <div class="shape-blob five" />
      {!list ? (
        <div>
          <Main />
          <button
            class="hover:bg-white hover:text-dark-blue
             bg-light-blue text-dark-blue px-6 pt-1 rounded-md 
             font-gotu mt-4 ml-4 top-0 text-2xl"
            onClick={() => setList(!list)}
          >
            Get Started &#127925;
          </button>
        </div>
      ) : (
        <div>
          <FileUpload />
        </div>
      )}
    </div>
  );
}

export default App;

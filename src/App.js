import logo from "./logo.svg";
import react, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import SongsList from "./components/SongsList";
import SongDisplay from "./components/SongDisplay";
import './index.css'

function App() {
  const [list, setList] = useState(false);

  return (
    <div className="App" class="container">
      {!list ? (
        <div>
          <button
            class="hover:bg-white hover:text-dark-blue bg-light-blue text-dark-blue px-6 rounded-md font-gotu ml-40 mt-40"
            onClick={() => setList(!list)}
          >
            Get Started.
          </button>
          <Main />
        </div>
      ) : (
        <SongDisplay/>
      )}
        <div class="shape-blob"/>
	<div class="shape-blob one"/>
	<div class="shape-blob two"/>
  <div class="shape-blob three"/>
  <div class="shape-blob four"/>
  <div class="shape-blob five"/>
    </div>
  );
}

export default App;

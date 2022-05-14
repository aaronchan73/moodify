import logo from "./logo.svg";
import react, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import SongsList from "./components/SongsList";
import SongDisplay from "./components/SongDisplay";

function App() {
  const [list, setList] = useState(false);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;

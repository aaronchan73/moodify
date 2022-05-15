import React, { Component } from "react";
import Song from "./Song";
import SongsList from "./SongsList";
import SavedSongs from "./SavedSongs";
import react, { useState } from "react";
import App from "../App";
import Main from "./Main";
import ListView from "./ListView";

class SongDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "disney",
    };
  }
  showHappy = () => {
    this.setState({ genre: "pop" });
    console.log(this.state.genre);
  };

  showSad = () => {
    this.setState({ genre: "sad" });
    console.log(this.state.genre);
  };

  showAngry = () => {
    this.setState({ genre: "rock" });
    console.log(this.state.genre);
  };

  showBored = () => {
    this.setState({ genre: "r-n-b" });
    console.log(this.state.genre);
  };

  showExcited = () => {
    this.setState({ genre: "dance" });
    console.log(this.state.genre);
  };

  render() {
    return (
      <div class="grid grid-col-3 gap-0 place-items-center h-screen">
        <div>
          <label class="text-light-blue font-gotu" for="fname">
            Mood:
          </label>

          <div class="flex flex-row gap-4  mb-4">
            <button
              class="mb-4 hover:bg-white hover:text-dark-blue bg-light-blue 
            text-dark-blue px-6 rounded-md font-gotu"
              onClick={this.showHappy}
            >
              Happy
            </button>
            <button
              class=" mb-4 hover:bg-white hover:text-dark-blue bg-light-blue 
            text-dark-blue px-6 rounded-md font-gotu"
              onClick={this.showSad}
            >
              Sad
            </button>
            <button
              class="  mb-4 hover:bg-white hover:text-dark-blue bg-light-blue 
            text-dark-blue px-6 rounded-md font-gotu"
              onClick={this.showAngry}
            >
              Angry
            </button>
            <button
              class=" mb-4 hover:bg-white hover:text-dark-blue bg-light-blue 
            text-dark-blue px-6 rounded-md font-gotu"
              onClick={this.showBored}
            >
              Bored
            </button>
            <button
              class=" mb-4 hover:bg-white hover:text-dark-blue bg-light-blue 
            text-dark-blue px-6 rounded-md font-gotu"
              onClick={this.showExcited}
            >
              Excited
            </button>
          </div>
          <div class=" top-0 left-0 mr-0" className="App"></div>
          <div>
            <SongsList genre={this.state.genre} />
          </div>
        </div>
      </div>
    );
  }
}

export default SongDisplay;

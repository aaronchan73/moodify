import React, { Component } from "react";
import Song from "./Song";
import SongsList from "./SongsList";
import App from "../App";
import ListView from "./ListView";

function SongDisplay() {
  return (
    <div class="grid grid-col-3 gap-0 place-items-center h-screen">
      <button class="bg-light-blue text-dark-blue rounded-md px-6">Back</button>
      <input class=" font-gotu rounded-lg bg-light-blue" type="file" />
      <div class="hover:bg-white">
        {/* <div class='flex items-center'>
          <img src={Song.url} alt=""/>
        </div> */}
        {/* <div class='bg-light-blue'> {Songs.name}</div>
        <div class='bg-light-blue'> two </div>
        <div class='bg-light-blue'> three </div>
        <div class='bg-light-blue'> four</div>
        <div class='bg-light-blue'> five</div>
        <div class='bg-light-blue'> six </div>
        <div class='bg-light-blue'> seven </div>
        <div class='bg-light-blue'> eight</div>
        <div class='bg-light-blue'> nine </div>
        <div class='bg-light-blue'> ten</div> */}
      </div>
      <ListView/>
    </div>
  );
}

export default SongDisplay;

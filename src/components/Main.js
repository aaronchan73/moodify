import React, { useState } from "react";
import App from "../App";
import SongDisplay from "./SongDisplay";

function Main() {
  const [list, setList] = useState(false);
  return (
    <div>
      <div class="pl-4 grid grid-rows-2 gap-1">
        <div>
          <h1
            class="justify-items-center text-[#849acf] pt-40 text-8xl font-gotu
            content-center tracking-wide col-start-2 col-span-2"
          >
            Moodify.
          </h1>
          <h1 class="font-gotu justify-items-center text-[#697CAE]">
            __________________________________________________________
          </h1>
        </div>
        <div>
          <p class="font-gotu max-w-prose text-[#849acf] grid justify-items-center">
            Ever wanted to let your emotion dictate the songs you listen to?
            Well, Moodify's got you! Based on five common emotions, Moodify
            brings up a list of recommended Spotify songs for you to listen
            away!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;

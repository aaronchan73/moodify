import React from "react";
import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";

const Song = ({ name, id, uri, url, imgUri }) => {
  const saveSong = async () => {
    await addDoc(collection(db, "songs"), {
      name: name,
      id: id,
      uri: uri,
      url: url,
      imgUri: imgUri,
    });
  }

  function reDirect(e) {
    window.open(url, "_blank");
  }

  return (
    <div class="flex flex-row gap-4 space-y-3 m-3">
      <img class="rounded-md h-9 w-9" src={imgUri} />

      <h1 class="hover:bg-white rounded-md hover:text-black mb-5">
        <button onClick={reDirect} class="mr-2 text-light-blue">
          &#9654;
        </button>

        {name}

        <button
          onClick={saveSong}
          class="ml-2 text-light-blue 
        hover:bg-white hover:text-light-blue"
        >
          &#x2913;
        </button>
      </h1>
    </div>
  );
};

export default Song;

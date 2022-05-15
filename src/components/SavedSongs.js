import React, { useEffect, useState, useReducer } from "react";
import { collection, getDocs } from "firebase/firestore";
import { client_id, client_secret } from "./Credentials";
import axios from "axios";
import { db } from "./Firebase";
import Song from "./Song";
import App from "../App";
import Main from "./Main";

const saved = [];

const SavedSongs = () => {
  const [show, setShow] = useState(false);
  const [back, setBack] = useState(false);
  const [done, setDone] = useState(0);

  let index = -1;

  const incIndex = () => {
    index++;
    return index;
  };

  useEffect(() => {
    getSaved();
  }, []);

  useEffect(() => {
    setBack(true);
  }, [done]);

  const getSaved = async () => {
    const querySnapshot = await getDocs(collection(db, "songs"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      saved.push(doc.data());
      setDone(1);
    });
  };

  return (
    <div class="overflow-y-auto">
      {saved.map((song, index) => (
        <Song
          key={incIndex()}
          name={song.name}
          id={song.id}
          uri={song.uri}
          url={song.url}
          imgUri={song.imgUri}
        />
      ))}
    </div>
  );
};

export default SavedSongs;

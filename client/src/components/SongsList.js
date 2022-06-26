import React, { useState, useEffect, useReducer } from "react";
import { client_id, client_secret } from "./Credentials";
import axios from "axios";
import Song from "./Song";
import SavedSongs from "./SavedSongs";

const SongsList = ({ genre }) => {
  const [token, setToken] = useState("");
  const [songs, setSongs] = useState([]);
  const [albumArts, setAlbumArts] = useState([]);
  const [songLink, setLinks] = useState([]);
  const [saved, setSaved] = useState(false);

  let index = -1;
  let arts = [];

  const incIndex = () => {
    index++;
    return index;
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    getSongs();
    getAlbumArts();
    getLinks();
  }, [token, genre]);

  const getToken = () => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    })
      .then((res) => {
        setToken(res.data.access_token);
      })
      .catch((error) => {
        console.log("TOKEN ERROR");
      });
  };

  const getSongs = () => {
    axios(
      `https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=${genre}&seed_tracks=0c6xIDDpzE81m2q797ordA&limit=10`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    )
      .then((res) => {
        setSongs(res.data.tracks);
        console.log(res.data.tracks);
      })
      .catch((error) => {
        console.log("SONG ERROR");
      });
  };

  const getLinks = () => {
    axios("https://api.spotify.com/v1/tracks/id", {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => {
        setLinks(res.data.external_urls);
        console.log(res.data.external_urls.spotify);
      })
      .catch((error) => {
        console.log("LINK ERROR");
      });
  };

  const getAlbumArts = () => {
    axios("https://api.spotify.com/v1/tracks/id", {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => {
        setAlbumArts(res.album.images[0].url);
        console.log(res.album.images[0].url);
      })
      .catch((error) => {
        console.log("ALBUM ART ERROR");
      });
  };

  return (
    <div>
      {!saved ? (
        <div>
          {songs.map((song, index) => (
            <Song
              key={incIndex()}
              name={song.name}
              id={song.id}
              uri={song.uri}
              url={song.external_urls.spotify}
              imgUri={song.album.images[0].url}
            />
          ))}
          <button
            class="bg-light-blue text-dark-blue rounded-md px-6 mt-3 font-gotu hover:bg-white"
            onClick={() => setSaved(!saved)}
          >
            View Saved Songs
          </button>
        </div>
      ) : (
        <div class="overflow-y-scroll">
          <SavedSongs />
          <button
            class="bg-light-blue text-dark-blue rounded-md px-6 mt-3 font-gotu hover:bg-white"
            onClick={() => setSaved(!saved)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default SongsList;

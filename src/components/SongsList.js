import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { client_id, client_secret } from './Credentials';

const SongsList = () => {

    const [token, setToken] = useState("");
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getToken();
        getSongs();
    }, []);

    const getToken = () => {

        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
            .then(res => {
                setToken(res.data.access_token);
            })
            .catch(error => {
                console.log('error');
            })

    }

    const getSongs = () => {

        axios('https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=rock&seed_tracks=0c6xIDDpzE81m2q797ordA&limit=10', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(res => {
                setSongs(res.data.tracks);
                console.log(songs);
            })
            .catch(error => {
                console.log('error');
            })
 
    }

    return songs.map(song => <h1>{song.name}</h1>);
}

export default SongsList
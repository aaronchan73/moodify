import React from 'react'
import { db } from './Firebase';
import { addDoc, collection } from 'firebase/firestore';

const Song = ({ name, id, uri, token }) => {

    const saveSong = async () => {
        await addDoc(collection(db, "songs"), {
            name: name,
            id: id,
            uri: uri
        });
    }

    // const getTrack = () => {

    //     axios(`https://api.spotify.com/v1/tracks/${id}`, {
    //         method: 'GET',
    //         headers: { 'Authorization': 'Bearer ' + token }
    //     })
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(error => {
    //             console.log('TRACK ERROR');
    //         });

    // }

    return <h1 onClick={() => saveSong()}>{name}</h1>; 
}

export default Song 
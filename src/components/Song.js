import React, { useEffect } from 'react'
import { db } from './Firebase';
import { addDoc, collection } from 'firebase/firestore';

const Song = ({ name, id, uri }) => {

    useEffect(() => {
        addSong();
    }, [])

    const addSong = async () => {
        const docRef = await addDoc(collection(db, "songs"), {
            name: name,
            id: id,
            uri: uri
        });
    }

    return <h1>{name}</h1>;
}

export default Song
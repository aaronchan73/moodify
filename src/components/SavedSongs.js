import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from './Firebase';

const saved = []

const SavedSongs = () => {

    const [show, setShow] = useState(false);

    let index = -1;

    const incIndex = () => {
        index++;
        return index;
    }

    useEffect(() => {
        getSaved();
    }, [])

    const getSaved = async () => {
        const querySnapshot = await getDocs(collection(db, "songs"));
        querySnapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            saved.push(doc.data().name);
        });
    }

    return (
        <div>
            <button onClick={() => setShow(!show)}>Get Saved</button>
            {show && saved.map(song => <h1>{song}</h1>)}
        </div>
    )
}

export default SavedSongs
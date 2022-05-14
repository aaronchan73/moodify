import React, { useEffect, useState } from 'react'
const vision = require('@google-cloud/vision');
const { JWT } = require('google-auth-library');

const Vision = () => {

    const [dict, setDict] = useState({});
    const [answer, setAnswer] = useState("");
    const fileName = "./image.jpg"
    const keys = require('./oauth2.keys.json');
    const client = new vision.ImageAnnotatorClient();

    useEffect(() => {
        authVision();
        // rankEmotions();
    }, []);

    const authVision = async () => {
        const client = new JWT({
            email: keys.client_email,
            key: keys.private_key,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        });
        const url = `https://dns.googleapis.com/dns/v1/projects/${keys.project_id}`;
        const res = await client.request({ url });
        console.log(res.data);
    }

    const detectFaces = async () => {

        const result = await client.faceDetection(fileName);
        const faces = await result.faceAnnotations;
        console.log('Faces:');
        faces.forEach((face, i) => {
            console.log(`  Face #${i + 1}:`);
            console.log(`    Joy: ${face.joyLikelihood}`);
            console.log(`    Anger: ${face.angerLikelihood}`);
            console.log(`    Sorrow: ${face.sorrowLikelihood}`);
            console.log(`    Surprise: ${face.surpriseLikelihood}`);
            setDict({
                joy: `${face.joyLikelihood}`,
                anger: `${face.angerLikelihood}`,
                sorrow: `${face.sorrowLikelihood}`,
                surprise: `${face.surpriseLikelihood}`
            });
        });
    }

    const rankEmotions = () => {
        for (var key in dict) {
            if (dict[key] === "VERY_LIKELY") {
                setAnswer(key);
            }
        }
        // setAnswer("IMAGE NOT FOUND");
    }

    return (
        <div>
            <h1>
                {answer}
            </h1>
        </div>
    )
}

export default Vision
import React, { useEffect, useState } from 'react'

const Vision = () => {

    const [dict, setDict] = useState({});
    const [answer, setAnswer] = useState("");

    const vision = require('@google-cloud/vision');
    const api_key = "AIzaSyBB-xv8yyuki1oQs54SQ-nfVcHq90yOtD0";

    const client = new vision.ImageAnnotatorClient();

    useEffect(() => {
        detectFaces();
        rankEmotions();
    }, []);

    async function detectFaces() {
        /**
         * TODO(developer): Uncomment the following line before running the sample.
         */
        // const fileName = 'Local image file, e.g. /path/to/image.png';

        const [result] = await client.faceDetection(fileName);
        const faces = result.faceAnnotations;
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

    function rankEmotions() {
        for (var key in dict) {
            if (dict[key] == "VERY_LIKELY") {
                setAnswer(key);
            }
        }
        setAnswer("IMAGE NOT FOUND");
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
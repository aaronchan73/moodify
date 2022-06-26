const { response } = require('express');
const express = require('express')
const fileUpload = require("express-fileUpload")
var cors = require('cors');

const app = express();

app.use(cors());
app.use(fileUpload());

app.post('/upload', (req, res) => {
if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded'});
} 
const file = req.files.image

file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
        console.log(err);
        return res.status(500).send(err);
    }
    res.json({filename: file.name, filePath: `/uploads/${file.name}`});
    func(`${__dirname}/client/public/uploads/${file.name}`);
});

}); 
// GOOGLE CLOUD VISION API
function func(fileName) {
    const vision = require('@google-cloud/vision');
    console.log(fileName);
    const client = new vision.ImageAnnotatorClient();
  
    async function detectFaces() {
  
      const [result] = await client.faceDetection(fileName);
      const faces = result.faceAnnotations;
      var joy = "";
      var anger = "";
      var sorrow = "";
      var surprise = "";
      console.log('Faces:');
      faces.forEach((face, i) => {
        console.log(`  Face #${i + 1}:`);
        console.log(`    Joy: ${face.joyLikelihood}`);
        joy = face.joyLikelihood;
        console.log(`    Anger: ${face.angerLikelihood}`);
        anger = face.angerLikelihood;
        console.log(`    Sorrow: ${face.sorrowLikelihood}`);
        sorrow = face.sorrowLikelihood;
        console.log(`    Surprise: ${face.surpriseLikelihood}`);
        surprise = face.surpriseLikelihood;
      });
      sendRequest(joy, anger, sorrow, surprise);
    }
    detectFaces();
  }
  
  process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
  });

  function sendRequest(joy, anger, sorrow, surprise) {
  app.get('/', (req, res) => {
    res.json([
        {Joy: `${joy}`},
        {Anger: `${anger}`},
        {Sorrow: `${sorrow}`},
        {Surprise: `${surprise}`}
    ])
    })
};



// maybe put this inside the previous function when we actually finish the request?

app.listen(5000, () => console.log('Server Started.'))
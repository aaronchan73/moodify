import React, { Fragment, useState } from 'react'
import axios from 'axios';

export default function FileUpload() {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
       setFile(e.target.files[0]);
       setFileName(e.target.files[0].name)
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        console.log(file);
        formData.append('image', file);
        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
            }
            });
            // makes post request
   

            const {fileName, filePath} = res.data;

            setUploadedFile({fileName, filePath});
            retrieveReq();
        } catch(err) {
            if (err.response.status === 500) {
                console.log('Problem with server')
            } else {
                console.log(err.response.data.msg);
            }
        }

        // probably fetch this to next component

    };

    function retrieveReq() {
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'http://localhost:5000/'
    };
  
    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    const obj = JSON.parse(response.data);
    //sendToSongDisplay(obj);
    })
    .catch(function (error) {
    console.log(error);
    });
    };

    // function sendToSongDisplay(JSONObj) {
    //     obj = JSONObj
    //     <SongDisplay
    //                joy={JSONObj.Joy}
    //     />
    // }
    return (
        <Fragment>
            <form onSubmit={onSubmit}> 
            <div className="mb-4">
            <input className="form-control" type="file" id="formFile" onChange={onChange}/>
            {/* <label for="formFile" className="form-label">Default file input example</label>  */}
            </div>
            <input type="submit" value="Upload" className="btn btn-primary w-100"/>

            </form>
            {uploadedFile ? (<div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <h3 className="text-center">{ uploadedFile.fileName}</h3>
                    <img style={{ width: '100%'}}src={uploadedFile.filePath} alt=""/>
                </div>
            </div>) 
            : null }
        </Fragment>
    )
    }

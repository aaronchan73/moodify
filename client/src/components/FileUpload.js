import React, { Fragment, useState } from 'react'
import axios from 'axios';
import Message from './Message'
import SongDisplay from './SongDisplay';

export default function FileUpload() {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [next, setNext] = useState(false);
    const [obj, setObj] = useState(null);

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
            //axios posts to local5000 (the server)
            console.log("we tried?")
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
                setMessage('Problem with server')
            } else {
                setMessage(err.response.data.msg);
                console.log(err.response.data.msg);
            }
        }
    };

    function retrieveReq() {
        setTimeout(function() {
        console.log("5000");
        var axios = require('axios');
        var config = {
        method: 'get',
        url: 'http://localhost:5000/'
        };
      
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        setMessage('File Uploaded Success!')
        setObj(JSON.parse(JSON.stringify(response.data)));
        })
        .catch(function (error) {
        console.log(error);
        });
        }, 3000)
    }

    function checkifUploaded() {
        if (obj != null) {
            setNext(!next);
        } else {
            setMessage("Must upload file first!")
        }
    }

    return (
        <Fragment>
            {message  ? <Message msg={message} />: null}
            <form onSubmit={onSubmit}> 
            {/* form is a container for input elements, so when an input element is pressed, it 
            triggers what is to the right of the tag. In this case onSubmit is triggers when the upload button is pressed */}
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
            {!next ? (
            <div>    
            <button
            class="hover:bg-white hover:text-dark-blue
             bg-light-blue text-dark-blue px-6 pt-1 rounded-md 
             font-gotu mt-4 ml-4 top-0 text-2xl"
            onClick={checkifUploaded}
            > 
            Next Page &#127925;
            </button>
            </div>) : (
            <div>
            <SongDisplay 
                joy={obj.Joy}
                anger={obj.Anger}
                sorrow={obj.Sorrow}
                surprise={obj.Surprise}
            />
            </div>
            )};
            
        </Fragment>
        
    )
    }

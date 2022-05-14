import React from 'react'

const Login = () => {

    const client_id = '3edbbb2ce7474418be85450f32ad4090';
    const redirect_uri = 'http://localhost:3000/';
    const auth_url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`;

  return <a href={auth_url}>Login with Spotify</a>
}

export default Login
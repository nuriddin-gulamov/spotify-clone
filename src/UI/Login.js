// React Import
import React from 'react';

// CSS
import './css/Login.css';

// Spotify Stuff Import
import { loginUrl } from '../API/spotify';

// Main
const Login = (props) => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify IMG"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

// Export
export default Login;

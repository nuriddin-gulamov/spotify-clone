// React Import
import React, { useEffect } from 'react';

// CSS
import './css/App.css';

// Components
import Login from './UI/Login';
import Player from './UI/Player';

// Spotify Stuff Import
import { getTokenFromUrl } from './API/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

// DataLayer Context Import
import { useDataLayerValue } from './API/reducer';

const spotify = new SpotifyWebApi();

// Main
const App = () => {
  const [{ token, discover_weekly }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcQv2BuQOOd4S').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });
    }
  }, [token, dispatch, discover_weekly]);

  return (
    <>
      <div className="app">
        {token ? <Player spotify={spotify} /> : <Login />}
      </div>
      <h1 className="hidden">
        We are sorry that this application is not optimized for smaller screens.
        Please open it up on Your PC or maximize your screen if you are already on PC.
      </h1>
    </>
  );
};

// Export
export default App;

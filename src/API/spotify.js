// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// authEndPoint
export const authEndPoint = 'https://accounts.spotify.com/authorize';

// redirectUri
const redirectUri = 'https://spotify-clone-gn.netlify.app/';

// Client ID
const clientId = '0c5f6b179af34da3b4adc928a6c9f8d7';

// Scopes
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

// getTokenFromUrl
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// Login Url
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;

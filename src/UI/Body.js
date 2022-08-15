// React Import
import React from 'react';

// CSS
import './css/Body.css';

// Components
import Header from './Header';
import SongRow from './SongRow';

// Icons
import { PlayCircleFilled } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MoreHoriz } from '@mui/icons-material';

// DataLayer Import
import { useDataLayerValue } from '../API/reducer';

// Main
const Body = ({ spotify }) => {
  const [{ discover_weekly }] = useDataLayerValue();

  const playSong = (id) => {
    alert('These functions do not work without Spotify Premium :(');
    // spotify
    //   .play({
    //     uris: [`spotify:track:${id}`],
    //   })
    //   .then((res) => {
    //     spotify.getMyCurrentPlayingTrack().then((response) => {
    //       dispatch({
    //         type: 'SET_ITEM',
    //         item: response.item,
    //       });
    //       dispatch({
    //         type: 'SET_PLAYING',
    //         playing: true,
    //       });
    //     });
    //   });
  };

  const iconsClickHandler = () => {
    alert('These functions do not work without Spotify Premium :(');
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__info-text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons" onClick={iconsClickHandler}>
          <PlayCircleFilled className="body__shuffle" />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} playSong={playSong} key={Math.random()} />
        ))}
      </div>

      <footer className="footer2">
        <em>&copy; Copyright - Nuriddin Gulamov, Spotify Clone. 2022.</em>
      </footer>
    </div>
  );
};

// Export
export default Body;

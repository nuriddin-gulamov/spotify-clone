// React Import
import React, { useEffect } from 'react';

// CSS
import './css/Footer.css';

// Icons
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';

// DataLayer Import
import { useDataLayerValue } from '../API/reducer';

// Main
const Footer = ({ spotify }) => {
  const [{ item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // spotify.getMyCurrentPlaybackState().then((response) => {
    //   dispatch({
    //     type: 'SET_PLAYING',
    //     playing: response.is_playing,
    //   });
    //   dispatch({
    //     type: 'SET_ITEM',
    //     item: response.item,
    //   });
    // });
  }, [spotify, dispatch]);

  const handlePlayPause = () => {
    alert('These functions do not work without Spotify Premium :(');
    // if (playing) {
    //   spotify.pause();
    //   dispatch({
    //     type: 'SET_PLAYING',
    //     playing: false,
    //   });
    // } else {
    //   spotify.play();
    //   dispatch({
    //     type: 'SET_PLAYING',
    //     playing: true,
    //   });
    // }
  };

  const skipNext = () => {
    alert('These functions do not work without Spotify Premium :(');
    // spotify.skipToNext();
    // spotify.getMyCurrentPlayingTrack().then((r) => {
    //   dispatch({
    //     type: 'SET_ITEM',
    //     item: r.item,
    //   });
    //   dispatch({
    //     type: 'SET_PLAYING',
    //     playing: true,
    //   });
    // });
  };

  const skipPrevious = () => {
    alert('These functions do not work without Spotify Premium :(');
    // spotify.skipToPrevious();
    // spotify.getMyCurrentPlayingTrack().then((r) => {
    //   dispatch({
    //     type: 'SET_ITEM',
    //     item: r.item,
    //   });
    //   dispatch({
    //     type: 'SET_PLAYING',
    //     playing: true,
    //   });
    // });
  };

  return (
    <div className="footer">
      <div className="footer__left">
        {/* <img
          src={item?.album.images[0].url}
          alt={item?.name}
          className="footer__album-logo"
        /> */}
        {item ? (
          <div className="footer__song-info">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ) : (
          <div className="footer__song-info">
            <h4>-</h4>
            <p>Spotify Premium required to play a song :(</p>
          </div>
        )}
      </div>
      <div className="footer__middle">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" onClick={skipPrevious} />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon className="footer__icon" onClick={skipNext} />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className="footer__slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

// Export
export default Footer;

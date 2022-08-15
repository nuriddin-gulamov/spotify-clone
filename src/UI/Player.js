// React Import
import React from 'react';

// CSS
import './css/Player.css';

// Components
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

// Main
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer spotify={spotify} />
    </div>
  );
};

// Export
export default Player;

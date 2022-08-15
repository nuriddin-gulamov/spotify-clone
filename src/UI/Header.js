// React Import
import React from 'react';

// CSS
import './css/Header.css';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// DataLayer Import
import { useDataLayerValue } from '../API/reducer';

// Main
const Header = ({ spotify }) => {
  const [{ user }] = useDataLayerValue();

  const headerClickHandler = () => {
    alert('These functions do not work without Spotify Premium :(');
  };

  return (
    <div className="header">
      <div className="header__left" onClick={headerClickHandler}>
        <SearchIcon className="header__search-icon" />
        <input placeholder="Artists, songs, or podcasts" type="text" />
      </div>
      <div className="header__right" onClick={headerClickHandler}>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
        <ExpandMoreIcon />
      </div>
    </div>
  );
};

// Export
export default Header;

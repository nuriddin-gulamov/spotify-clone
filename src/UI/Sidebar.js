// React Import
import React from 'react';

// CSS
import './css/Sidebar.css';

// Components
import SidebarOption from './SidebarOption';

// Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

// useDataLayerValue Import
// import { useDataLayerValue } from '../API/reducer';

// Main
const Sidebar = () => {
  // const [{ playlists }, dispatch] = useDataLayerValue();

  const sidebarOptionClickHandler = () => {
    alert('These functions do not work without Spotify Premium :(');
  };

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify IMG"
      />
      <SidebarOption
        Icon={HomeOutlinedIcon}
        title="Home"
        sidebarOptionClickHandler={sidebarOptionClickHandler}
      />
      <SidebarOption
        Icon={SearchOutlinedIcon}
        title="Search"
        sidebarOptionClickHandler={sidebarOptionClickHandler}
      />
      <SidebarOption
        Icon={BookmarksOutlinedIcon}
        title="Your Library"
        sidebarOptionClickHandler={sidebarOptionClickHandler}
      />
      <hr />
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} key={Math.random()} />
      ))} */}
    </div>
  );
};

// Export
export default Sidebar;

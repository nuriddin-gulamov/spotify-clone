// React Import
import React from 'react';

// CSS
import './css/SidebarOption.css';

// Main
const SidebarOption = ({ title, Icon, sidebarOptionClickHandler }) => {
  return (
    <div className="sidebar-option" onClick={sidebarOptionClickHandler}>
      {Icon && <Icon className="sidebar-option__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

// Export
export default SidebarOption;

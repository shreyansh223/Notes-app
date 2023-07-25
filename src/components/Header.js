import React from 'react';

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <label className="switch">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          onClick={() => {
            handleDarkMode((previousDarkMode) => !previousDarkMode);
          }}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Header;

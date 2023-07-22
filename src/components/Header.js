import React from 'react';

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <label class="switch">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          onClick={() => {
            handleDarkMode((previousDarkMode) => !previousDarkMode);
          }}
        />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Header;

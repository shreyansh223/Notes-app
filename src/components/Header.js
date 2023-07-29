import React, { useState } from 'react';
import { MdSettings, MdClose } from 'react-icons/md';
const Header = ({
  handleDarkMode,
  handleDarkTheme,
  handleLightTheme,
  lightTheme,
  darkTheme,
}) => {
  const settingIcon = document.querySelector('.settings');
  const close = document.querySelector('.close');
  let darkModeCurrent = true;
  const menu = document.querySelector('.settings-menu');
  let menuState = 'none';
  if (settingIcon) {
    settingIcon.addEventListener('click', () => {
      if (menuState === 'flex') {
        menu.style.display = 'none';
        menuState = 'none';
      } else {
        menu.style.display = 'flex';
        menuState = 'flex';
      }
    });
  }
  if (close) {
    close.addEventListener('click', () => {
      menu.style.display = 'none';
      menuState = 'none';
    });
  }

  return (
    <div className="header">
      <h1>Notes</h1>

      <div class="header-left">
        <label className="switch">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            onClick={() => {
              handleDarkMode((darkModeCurrent) => !darkModeCurrent);
            }}
          />
          <span className="slider round" id="switch"></span>
        </label>

        <MdSettings className="settings"></MdSettings>
        <div className="settings-menu">
          <MdClose className="close" size={'1.3rem'}></MdClose>

          <label>
            Set light-mode background colour :<br></br>
            <input
              type="color"
              name="text"
              onChange={(e) => {
                handleLightTheme(e.target.value);
              }}
            />
            <br />
          </label>
          <br></br>
          <label>
            Set dark-mode background colour :<br></br>{' '}
            <input
              type="color"
              name="back-ground"
              className="back-ground"
              onChange={(e) => {
                handleDarkTheme(e.target.value);
              }}
            />
          </label>
          <br></br>
          <button
            className="reset-btn"
            onClick={() => {
              handleDarkTheme('black');
              handleLightTheme('white');
            }}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

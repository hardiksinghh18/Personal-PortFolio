import React from 'react';
import { Tooltip } from '@mui/material';

const CommandPaletteTrigger = ({ onClick }) => {
  return (
    <Tooltip title="Open Command Palette" arrow placement="top">
      <button className="cmd-trigger-btn" onClick={onClick} aria-label="Open Command Palette">

        <span className="cmd-trigger-badge">
          <kbd>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
          </kbd>
          <kbd>K</kbd>
        </span>
      </button>
    </Tooltip>
  );
};

export default CommandPaletteTrigger;

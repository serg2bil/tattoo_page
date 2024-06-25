
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import styles from './button.module.css';

export default function MenuButton({ handleMenuToggle, isMenuOpen}) {
  

 

  return (
    <IconButton  sx={{
      '&.MuiButtonBase-root':{
        padding:'0'
      }
    }}className={styles.menuButton} onClick={handleMenuToggle}>
      <svg
        className={`${styles.svg} ${isMenuOpen ? styles.open : ''}`}
        width="32"
        height="32"
        viewBox="0 0 32 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.line1}
          d="M3.07942e-05 1.00003C1.37872e-05 0.447734 0.447734 0 1.00003 0H16H31C31.5523 0 32 0.447715 32 1C32 1.55228 31.5523 2 31 2H1.00003C0.447758 2 4.78005e-05 1.5523 3.07942e-05 1.00003Z"
          fill="#00F3BC"
        />
        <path
          className={styles.line2}
          d="M28 6.99998C28 7.55227 27.5523 8 27 8L16 8L5 8C4.44772 8 4 7.55229 4 7C4 6.44772 4.44772 6 5 6L27 6C27.5523 6 28 6.4477 28 6.99998Z"
          fill="#00F3BC"
        />
        <path
          className={styles.line3}
          d="M32 13C32 13.5523 31.5523 14 31 14L16 14L1 14C0.447716 14 -3.91405e-08 13.5523 -8.74228e-08 13C-1.35705e-07 12.4477 0.447716 12 1 12L31 12C31.5522 12 32 12.4477 32 13Z"
          fill="#00F3BC"
        />
      </svg>
    </IconButton>
  );
}

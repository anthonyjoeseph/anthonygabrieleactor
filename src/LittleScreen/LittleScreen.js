import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './LittleScreen.css';

const LittleScreen = () => (
  <div className={styles.App}>
    <header className={styles.AppHeader}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <h1 className={styles.AppTitle}>Welcome to React</h1>
    </header>
    <p className={styles.AppIntro}>
      Little Screen
    </p>
  </div>
);

export default LittleScreen;

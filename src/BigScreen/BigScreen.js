import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './BigScreen.css';

const BigScreen = () => (
  <div className={styles.App}>
    <header className={styles.AppHeader}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <h1 className={styles.AppTitle}>Welcome to React</h1>
    </header>
    <p className={styles.AppIntro}>
      Big Screen
    </p>
  </div>
);

export default BigScreen;

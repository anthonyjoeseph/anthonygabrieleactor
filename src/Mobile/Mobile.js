import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './Mobile.css';

const Mobile = () => (
  <div className={styles.App}>
    <header className={styles.AppHeader}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <h1 className={styles.AppTitle}>Welcome to React</h1>
    </header>
    <p className={styles.AppIntro}>
      Mobile
    </p>
  </div>
);

export default Mobile;

import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Flexbox from 'flexbox-react';
import { slide as Menu } from 'react-burger-menu'

import BurgerMenuItem from './BurgerMenuItem';

export default class BurgerMenu extends Component {
  state = {
    isOpen: false
  }
  render(){
    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    };
    return (
      <Menu
        styles={styles}
        isOpen={this.state.isOpen}
        onStateChange={(state) => this.setState({isOpen: state.isOpen})}
        right
      >
        <BurgerMenuItem
          to="/home"
          text="home"
          onClick={() => this.setState({isOpen: false})}
        />
        <BurgerMenuItem
          to="/news"
          text="news"
          onClick={() => this.setState({isOpen: false})}
        />
        <BurgerMenuItem
          to="/resume"
          text="resume"
          onClick={() => this.setState({isOpen: false})}
        />
        <BurgerMenuItem
          to="/media"
          text="media"
          onClick={() => this.setState({isOpen: false})}
        />
        <BurgerMenuItem
          to="/gallery"
          text="gallery"
          onClick={() => this.setState({isOpen: false})}
        />
        <BurgerMenuItem
          to="/contact"
          text="contact"
          onClick={() => this.setState({isOpen: false})}
        />
      </Menu>
    );
  }
}
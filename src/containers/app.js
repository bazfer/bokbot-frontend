import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import Sensors_Bar from './sensors_bar';
import Controllers_Bar from './controllers_bar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Sensors_Bar />
        <Controllers_Bar />
        {/*<ReactPlayer className='bg-vid' url='https://www.youtube.com/watch?v=fCUPh9xR96M' playing />*/}
        <img className='bg' src='../../assets/images/bg.png' />
        <img className='logo shadowed' src='../../assets/images/bokbot-logo.svg' />
        {/*<img className='bg' src='https://connect.bokbot.org/images/coop333.jpg' />*/}
      </div>
    );
  }
}

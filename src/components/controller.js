import React, { Component } from 'react';
import axios from 'axios';

const controllerKey = {
  Light: {
    text: 'Light',
    icon_url: '../../assets/images/lightbulb.svg',
    turnOff: 'http://192.168.8.139:6080/json.htm?type=command&param=switchlight&idx=12&switchcmd=Off',
    turnOn: 'http://192.168.8.139:6080/json.htm?type=command&param=switchlight&idx=12&switchcmd=On',
    toggle: 'http://192.168.8.139:6080/json.htm?type=command&param=switchlight&idx=12&switchcmd=Toggle'
  },
  Fan: {
    text: 'Fan',
    icon_url: '../../assets/images/fan.svg',
    turnOff: 'http://192.168.8.139:6080/json.htm?type=command&param=switchlight&idx=10&switchcmd=Off',
    turnOn: 'http://192.168.8.139:6080/json.htm?type=command&param=switchlight&idx=10&switchcmd=On',
    toggle: 'http://192.168.8.139:6080/json.htm?type=command&param=switchlight&idx=10&switchcmd=Toggle'
  },
  Door: {
    text: 'Door',
    icon_url: '../../assets/images/door.svg',
    turnOff: 'http://192.168.8.139:6080/json.htm?type=command&param=switchlight&idx=17&switchcmd=Off',
    turnOn: 'http://192.168.8.139:6080/json.htm?type=command&param=switchlight&idx=17&switchcmd=On',
    toggle: 'http://192.168.8.139:6080/json.htm?type=command&param=switchlight&idx=17&switchcmd=Toggle'
  }
} 

export default class Controller extends Component {

  handleClick(e) {
    e.preventDefault();
    const request = axios.get(controllerKey[this.props.type].toggle);
  }

  render() {
    return (
      <div className='controller shadowed'>
        <div className='controller-status'>
          {this.props.status}
        </div>
        <a className='controller-link' onClick={this.handleClick.bind(this)}>
          <img src={controllerKey[this.props.type].icon_url} height='64' width='64'/> 
        </a>
      </div>
    );
  }
}
import React, { Component } from 'react';
import axios from 'axios';

import Controller from '../components/controller';

const controllersURL = 'http://192.168.8.139:6080/json.htm?type=devices&filter=light&used=true&order=Name';



export default class Controllers_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: '',
      fan: '',
      door: ''
    }
  }

  getControllersData() {
    const request = axios.get(controllersURL)
      .then((res) => {
        let controllersList = res.data.result;
        console.log(controllersList);
        this.setState({
          light: controllersList[2].Status,
          fan: controllersList[1].Status,
          door: controllersList[4].Status
        });
    });
  }

  componentWillMount() {
    this.getControllersData();
  }

  render() {
    return (
      <div className='controllers-bar'>
        <Controller type='Light' status='On/Off' />
        <Controller type='Fan' status='On/Off' />
        <Controller type='Door' status='On/Off'/>
      </div>
    );
  }
}
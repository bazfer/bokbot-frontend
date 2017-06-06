import React, { Component } from 'react';
import axios from 'axios';

import Sensor from '../components/sensor';

const utilityURL = 'http://192.168.8.139:6080/json.htm?type=devices&filter=utility&used=true&order=Name';
const tempURL= 'http://192.168.8.139:6080/json.htm?type=devices&filter=temp&used=true&order=Name';

var sensorsData;

export default class Sensors_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      humidity: '',
      water: '',
      gas: '',
      motion: ''
    }
  }

  getSensorsData() {
   const request = axios.get(tempURL)
      .then((res) => {
        let tempList = res.data.result;
        console.log(tempList[1].Data);
        this.setState({
          temperature: tempList[0].Data,
          humidity: tempList[1].Data,
          water: 'Water',
          gas: 'Gas',
          motion: 'Motion'
        });
    });
  }

  ticker() {
    setInterval(() => this.getSensorsData(), 5000);
  }

  componentWillMount() {
    this.getSensorsData();
    this.ticker();
  }

  render() {
    return (
      <div className='sensors_bar'>
        <Sensor type='Temperature' status={(this.state.humidity).slice(0,6)}/>
        <Sensor type='Humidity' status={(this.state.humidity).slice(((this.state.humidity).indexOf(',') + 1))}/>
        <Sensor type='Water' status={this.state.water} />
        <Sensor type='Gas' status={this.state.gas}/>
        <Sensor type='Motion' status={this.state.motion} />
      </div>
    );
  }
}
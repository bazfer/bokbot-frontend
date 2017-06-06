import React, { Component } from 'react';

const sensorKey = {
  Battery: {
    text: 'Battery',
    icon_url: '../../assets/images/battery.svg'
  },
  Temperature: {
    text: 'Temperature',
    icon_url: '../../assets/images/temperature.svg'
  },
  Humidity: {
    text: 'Humidity',
    icon_url: '../../assets/images/humidity.svg'
  },
  Water: {
    text: 'Water',
    icon_url: '../../assets/images/water.svg'
  },
  Gas: {
    text: 'Gas',
    icon_url: '../../assets/images/gas.svg'
  },
  Motion: {
    text: 'Motion',
    icon_url: '../../assets/images/motion.svg'
  }
}

export default class Sensor extends Component {
  render() {
    return (
      <div className='sensor shadowed'>
        <div className='sensor-icon'>
          <img src={sensorKey[this.props.type].icon_url} height='64' width='64'/>
        </div> 
        <div className='sensor-data'>
          {this.props.status}
        </div>
      </div>
    );
  }
}
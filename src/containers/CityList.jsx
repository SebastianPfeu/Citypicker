/* eslint-disable */
import React, { Component } from 'react';
import City from './City';

class CityList extends Component {
  render() {
    return (
      <ul className="list-group cities">
        {this.props.cities.map((city) => {
          return (
            <City key={city.name} city={city} />
          )
        })}
      </ul>
    );
  }
}

export default CityList;

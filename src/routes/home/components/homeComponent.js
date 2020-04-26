/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import MapContainer from './mapContainer/index';
import {Container} from 'native-base';

export default class Home extends React.Component {
  componentDidMount = () => {
    this.props.setName();
  };

  render() {
    // const region = {
    //   latitude: 3.146642,
    //   longitude: 101.695845,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // };
    return (
      <Container>
        <MapContainer />
      </Container>
    );
  }
}

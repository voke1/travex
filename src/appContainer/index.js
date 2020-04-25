import React, {Component} from 'react';
import {Router} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import scenes from '../routes/scene';
import PropTypes from 'prop-types';

export default class AppContainer extends Component {
  static PropTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}

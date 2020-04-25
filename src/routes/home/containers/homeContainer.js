import {connect} from 'react-redux';
import Home from '../components/home';
import item from '../modules/home';

const mapStateToProps = state => {
  return {};
};

const mapActionCreators = {};
export default connect(
  mapStateToProps,
  mapActionCreators,
)(Home);

import {connect} from 'react-redux';
import Home from '../components/homeComponent';
import {setName} from '../modules/homeModule';

const mapStateToProps = state => {
  return {name: state.home.name};
};

const mapActionCreators = {setName};
export default connect(
  mapStateToProps,
  mapActionCreators,
)(Home);

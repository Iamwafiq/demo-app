import React from 'react';
import { connect } from 'react-redux';
import { registerReducer } from '../Register/reducer';
import HomePage from './components';
import { useInjectReducer } from '../../reducers/injectReducer';

const Home = (props) => {
  useInjectReducer({ key: 'registerReducer', reducer: registerReducer });

  return <HomePage {...props} />;
};

function mapStateToProps(props) {
  return {
    ...props,
  };
}
export default connect(mapStateToProps)(Home);

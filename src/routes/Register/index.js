import React from 'react';
import { connect } from 'react-redux';
import { registerReducer } from './reducer';
import RegisterForm from './components';
import { useInjectReducer } from '../../reducers/injectReducer';

const Register = (props) => {
  useInjectReducer({ key: 'registerReducer', reducer: registerReducer });

  return props.registerReducer?<RegisterForm {...props} />:""
};

function mapStateToProps(props) {
  return {
    ...props,
  };
}
export default connect(mapStateToProps)(Register);

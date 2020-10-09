import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './components';

const Login = (props) => {
  
  return <LoginForm {...props} />
};

function mapStateToProps(props) {
  return {
    ...props,
  };
}
export default connect(mapStateToProps)(Login);

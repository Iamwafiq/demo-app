import React, { useState } from 'react';
import { shape } from 'prop-types';
import {
  loginPage,
  loginText,
  loginBox,
  fields,
  button,
  input,
} from './styles';
import { Toast } from 'toaster-js';
import 'toaster-js/default.scss';
import { setSession } from '../../../services/utils';
import Button from '../../../components/Button';
import TextBox from '../../../components/TextBox';

const LoginForm = (props) => {
  const { history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    var time = 3000;
    let error = false;
    let reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg1.test(email) && !error) {
      error = true;
      new Toast('Enter Valid Email', Toast.TYPE_ERROR, time);
    } else {
      if (props && props.registerReducer && !error) {
        const { userList } = props.registerReducer;
        const user = userList.filter((user) => user.email === email);
        if (user && user.length && !error) {
          if (password === user[0].password) {
            history.push('/home');
            setSession(email);
          } else {
            new Toast('Please Enter Correct Password', Toast.TYPE_ERROR, time);
          }
        } else if (!error) {
          new Toast('Email doesnot exist', Toast.TYPE_ERROR, time);
        }
      } else {
        new Toast('Email doesnot exist', Toast.TYPE_ERROR, time);
      }
    }
  };
  const register = () => {
    history.push('/register');
  };
  return (
    <div className={loginPage}>
      <div className={loginBox}>
        <p className={loginText}>Let&apos;s get you started</p>
        <div className={fields}>
          <TextBox
            name="email"
            className={input}
            value={email}
            type="email"
            placeholder="Enter Email"
            onChange={setEmail}
          />
          <TextBox
            name="password"
            className={input}
            value={password}
            type="password"
            placeholder="Enter Password"
            onChange={setPassword}
          />
          <Button className={button} click={loginUser} text="Login" />
          <Button className={button} click={register} text="Register" />
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  history: shape.isRequired,
};

export default LoginForm;

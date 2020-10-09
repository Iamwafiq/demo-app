import React, { useState, useEffect } from 'react';
import { func, shape } from 'prop-types';
import {
  loginPage,
  loginBox,
  fields,
  button,
  input,
  eachLine,
  inputSingle,
  loginText,
  imageBox,
  addImage,
} from './styles';
import { changePwd, reset } from '../../Register/actions';
import plusIcon from '../../../images/plus-icon.svg';
import { removeSession, getSession } from '../../../services/utils';
import { Toast } from 'toaster-js';
import 'toaster-js/default.scss';
import TextBox from '../../../components/TextBox';
import Button from '../../../components/Button';

const HomePage = (props) => {
  const { dispatch, registerReducer, history } = props;
  const [dataObj, setDataObj] = useState({});
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newConfPassword, setNewConfPassword] = useState('');
  const [showPwd, setShowPwd] = useState('');

  const logout = () => {
    removeSession();
    history.push('/');
  };

  useEffect(() => {
    const email = getSession();
    if (props && props.registerReducer && email && email.length) {
      const { userList, passwordChanged } = registerReducer;
      const user = userList.filter((user) => user.email === email);
      setDataObj(user[0]);
      setShowPwd(false);
      if (passwordChanged) {
        logout();
        dispatch(reset());
      }
    }
  }, [registerReducer]);

  const changePassword = () => {
    var time = 3000;
    let reg1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    let reg2 = /^[A-Za-z0-9 ]+$/;
    const { password, email } = dataObj;

    if (oldPassword !== password) {
      new Toast('Old Password is Incorrect', Toast.TYPE_ERROR, time);
    } else {
      let error = false;
      if (!newPassword.length && !error) {
        error = true;
        new Toast('Password should not be Empty', Toast.TYPE_ERROR, time);
      } else if (newPassword.length < 8 && !error) {
        error = true;
        new Toast(
          'Password should be atleast 8 characters',
          Toast.TYPE_ERROR,
          time,
        );
      } else if (!reg1.test(newPassword) || reg2.test(newPassword)) {
        if (!error) {
          error = true;
          new Toast(
            'Password should have one UpperCase, one LowerCase, a Number and a Special Character',
            Toast.TYPE_ERROR,
            time,
          );
        }
      }
      if (newPassword !== newConfPassword && !error) {
        error = true;
        new Toast("Password doesn't not Match", Toast.TYPE_ERROR, time);
      }
      if (!error) {
        const obj = {
          email: email,
          password: newPassword,
        };
        dispatch(changePwd(obj));
      }
    }
  };
  const expand = () => {
    setShowPwd(!showPwd);
  };
  return (
    <div className={loginPage}>
      <div className={loginBox}>
        <div className={loginText}>Your Details are below</div>
        <div className={fields}>
          <div className={eachLine}>
            <div className={imageBox}>
              <img
                className={addImage}
                width="100%"
                height="100%"
                src={
                  dataObj && dataObj.image
                    ? dataObj.image
                    : 'https://img.icons8.com/metro/26/000000/user-male-circle.png'
                }
              />
            </div>
            <div>
              <div className={eachLine} style={{ 'margin-left': '4em' }}>
                Name: {dataObj && dataObj.firstName}{' '}
                {dataObj && dataObj.lastName}
              </div>
              <div className={eachLine} style={{ 'margin-left': '4em' }}>
                Email: {dataObj && dataObj.email}
              </div>
            </div>
          </div>
          <div className={eachLine}>
            <div className={input}>Phone: {dataObj && dataObj.phone}</div>
            <div className={input}>Gender: {dataObj && dataObj.gender}</div>
          </div>
          <div className={eachLine} style={{ padding: '11px 10px' }}>
            Address: {dataObj && dataObj.address}
          </div>
          <Button className={button} click={logout} text="Logout" />
          {showPwd ? (
            <div className={fields}>
              <TextBox
                name="password"
                className={inputSingle}
                value={oldPassword}
                type="password"
                placeholder="Enter Old Password"
                onChange={setOldPassword}
              />
              <TextBox
                name="password"
                className={inputSingle}
                value={newPassword}
                type="password"
                placeholder="Enter New Password"
                onChange={setNewPassword}
              />
              <TextBox
                name="password"
                className={inputSingle}
                value={newConfPassword}
                type="password"
                placeholder="Confirm New Password"
                onChange={setNewConfPassword}
              />
              <Button
                className={button}
                click={changePassword}
                text="Change Password"
              />
            </div>
          ) : (
            ''
          )}
          {showPwd ? (
            ''
          ) : (
            <Button className={button} click={expand} text="Change Password" />
          )}
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  dispatch: func.isRequired,
  registerReducer: shape.isRequired,
  history: shape.isRequired,
};

export default HomePage;

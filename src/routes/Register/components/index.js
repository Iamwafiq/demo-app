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
  inputSingleText,
  radioText,
  singleRadio,
  inboxText,
  loginText,
  imageBox,
  addImage,
} from './styles';
import { registerRequest, reset } from '../actions';
import plusIcon from '../../../images/plus-icon.svg';
import { Toast } from 'toaster-js';
import 'toaster-js/default.scss';
import TextBox from '../../../components/TextBox';
import Button from '../../../components/Button';
const RegisterForm = (props) => {
  const { dispatch, registerReducer, history } = props;
  const { isRegistered } = registerReducer;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setcPassword] = useState('');
  const [image, setImage] = useState('');
  useEffect(() => {
    if (isRegistered) {
      history.push('/');
      dispatch(reset());
    }
  }, [isRegistered]);

  const registerUser = () => {
    let error = false;
    let reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let reg2 = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    let reg3 = /^[a-z]+$/i;
    let reg4 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    let reg5 = /^[A-Za-z0-9 ]+$/;

    let time = 3000;

    if (!firstName.length && !error) {
      error = true;
      new Toast('First Name should not be Empty', Toast.TYPE_ERROR, time);
    } else if (firstName.length) {
      if (!reg3.test(firstName) && !error) {
        error = true;
        new Toast(
          'First Name should have alphabets only',
          Toast.TYPE_ERROR,
          time,
        );
      }
    }

    if (!lastName.length && !error) {
      error = true;
      new Toast('Last Name should not be Empty', Toast.TYPE_ERROR, time);
    } else if (lastName.length) {
      if (!reg3.test(lastName) && !error) {
        error = true;
        new Toast(
          'Last Name should have alphabets only',
          Toast.TYPE_ERROR,
          time,
        );
      }
    }

    if (!email.length && !error) {
      error = true;
      new Toast('Email should not be Empty', Toast.TYPE_ERROR, time);
    } else if (email.length) {
      if (!reg1.test(email) && !error) {
        error = true;
        new Toast('Enter Valid Email', Toast.TYPE_ERROR, time);
      }
    }

    if (!phone.length && !error) {
      error = true;
      new Toast('Phone should not be Empty', Toast.TYPE_ERROR, time);
    } else if (phone.length) {
      if (!reg2.test(phone) && !error) {
        error = true;
        new Toast('Enter Valid Phone Number', Toast.TYPE_ERROR, time);
      }
    }

    if (!gender.length && !error) {
      error = true;
      new Toast('Please Select a Gender', Toast.TYPE_ERROR, time);
    }
    if (!address.length && !error) {
      error = true;
      new Toast('Address should not be Empty', Toast.TYPE_ERROR, time);
    } else if (address.length < 20 && !error) {
      error = true;
      new Toast(
        'Address cannot be less than 20 characters',
        Toast.TYPE_ERROR,
        time,
      );
    }

    if (!password.length && !error) {
      error = true;
      new Toast('Password should not be Empty', Toast.TYPE_ERROR, time);
    } else if (password.length < 8 && !error) {
      error = true;
      new Toast(
        'Password should be atleast 8 characters',
        Toast.TYPE_ERROR,
        time,
      );
    } else if (!reg4.test(password) || reg5.test(password)) {
      if (!error) {
        error = true;
        new Toast(
          'Password should have one UpperCase, one LowerCase, a Number and a Special Character',
          Toast.TYPE_ERROR,
          time,
        );
      }
    }

    if (password !== cPassword && !error) {
      error = true;
      new Toast("Password doesn't not Match", Toast.TYPE_ERROR, time);
    }

    if (!error) {
      const obj = {};
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
      obj['email'] = email;
      obj['phone'] = phone;
      obj['gender'] = gender;
      obj['address'] = address;
      obj['password'] = password;
      obj['image'] = image;
      dispatch(registerRequest(obj));
    }
  };
  const uploadFile = ({ e, type }) => {
    if (e.target && e.target.files && e.target.files[0]) {
      e.persist();
      const file = e.target.files[0];
      const isLt3M = file.size / 1024 / 1024 < 3;
      if (!isLt3M) {
        new Toast('File Size Should be less than 3MB', Toast.TYPE_ERROR, 5000);
      } else {
        if (/\.(jpg|jpeg|png)$/i.test(file.name)) {
          const obj = { fileObj: file };
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = (imageUrl) => {
            setImage(imageUrl.target.result);
          };
        } else {
          new Toast('Please Upload JPG/JPEG/PNG file', Toast.TYPE_ERROR, 5000);
        }
      }
    }
  };
  return (
    <div>
      <div className={loginPage}>
        <div className={loginBox}>
          <div className={loginText}>Fill in the Registration Form</div>
          <div className={fields}>
            <div className={eachLine}>
              <div className={imageBox}>
                <label for="upload-image">
                  <img
                    alt="icon"
                    className={image && image.length ? '' : addImage}
                    width="100%"
                    height="100%"
                    src={image && image.length ? image : plusIcon}
                  />
                </label>
              </div>
              <input
                type="file"
                key={new Date()}
                onChange={(e) => uploadFile({ e })}
                id="upload-image"
                style={{ display: 'none' }}
              />
              <div>Add Image</div>
            </div>
            <div className={eachLine}>
              <TextBox
                value={firstName}
                name="firstName"
                className={input}
                type="text"
                placeholder="First Name"
                onChange={setFirstName}
              />
              <TextBox
                value={lastName}
                name="lastName"
                className={input}
                type="text"
                placeholder="Last Name"
                onChange={setLastName}
              />
            </div>
            <div className={eachLine}>
              <TextBox
                value={email}
                name="email"
                className={input}
                type="email"
                placeholder="Enter Email Id"
                onChange={setEmail}
              />
              <TextBox
                value={phone}
                name="phone"
                className={input}
                type="text"
                placeholder="Enter Phone Number"
                onChange={setPhone}
              />
            </div>
            <div className={eachLine}>
              <div
                className={inputSingle}
                style={{ border: 'none', display: 'flex' }}>
                <div className={radioText}>
                  <div className={inboxText}>Select Gender:</div>
                </div>
                <div className={singleRadio}>
                  <input
                    type="radio"
                    onBlur={(e) => setGender(e.target.value)}
                    id="male"
                    name="gender"
                    value="male"
                  />
                  <label for="male" style={{ 'margin-left': '0.2em' }}>
                    Male
                  </label>
                </div>
                <div className={singleRadio}>
                  <input
                    type="radio"
                    onBlur={(e) => setGender(e.target.value)}
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label for="female" style={{ 'margin-left': '0.2em' }}>
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className={eachLine}>
              <TextBox
                value={address}
                name="address"
                inputType="text"
                className={inputSingleText}
                type="text"
                placeholder="Enter Address"
                onChange={setAddress}
              />
            </div>
            <div className={eachLine}>
              <TextBox
                value={password}
                name="password"
                className={input}
                type="password"
                placeholder="Enter Password"
                onChange={setPassword}
              />
              <TextBox
                value={cPassword}
                name="confirmPassword"
                className={input}
                type="password"
                placeholder="Confirm Password"
                onChange={setcPassword}
              />
            </div>
            <Button className={button} click={registerUser} text="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterForm.propTypes = {
  dispatch: func.isRequired,
  registerReducer: shape.isRequired,
  history: shape.isRequired,
};

export default RegisterForm;

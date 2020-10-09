import { REGISTER_REQUEST, RESET, CHANGE_PASSWORD } from './constants';

export function registerRequest(obj) {
  return {
    type: REGISTER_REQUEST,
    payload: { ...obj },
  };
}

export function changePwd(obj) {
  return {
    type: CHANGE_PASSWORD,
    payload: { ...obj },
  };
}

export function reset(obj) {
  return {
    type: RESET,
  };
}

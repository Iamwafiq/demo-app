import { REGISTER_REQUEST, RESET, CHANGE_PASSWORD } from './constants';
import {cloneDeep} from 'lodash';
// The initial state of the App
export const initialState = {
  isRegistered: false,
  userList:[],
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      const arr = cloneDeep(state.userList)
      arr.push(action.payload)
      return {
        ...state,
        isRegistered: true,
        userList: arr
      };
    case RESET:
      return{
        ...state,
        isRegistered:false,
      }
    case CHANGE_PASSWORD:
      const arr1 = cloneDeep(state.userList)
      const ind = arr1.findIndex(el=>el.email===action.payload.email)
      arr1[ind].password=action.payload.password
      return{
        ...state,
        userList: arr1,
      }
    default:
      return state;
  }
};

import { StateOptions } from './../../interfaces/common-interface';
import { tassign } from 'tassign';
import * as actions from './common-actions';

export interface CommonState {
  userData: any;
  charList: any;
  charChoose: any;
}

export const COMMON_INITAL_STATE: CommonState = {
  userData: null,
  charList: [],
  charChoose: null,
};

function storeUser(state, action) {
  return tassign(state, {
    userData: action.payload
  });
}

function storeCharList(state, action) {
  return tassign(state, {
    charList: action.payload
  });
}

function storeCharChoose(state, action) {
  return tassign(state, {
    charChoose: action.payload
  });
}


export function commonReducer(state = COMMON_INITAL_STATE, action): CommonState {
  switch (action.type) {
    case actions.STORE_USER: return storeUser(state, action);
    case actions.STORE_CHAR_LIST: return storeCharList(state, action);
    case actions.STORE_CHAT_CHOOSE: return storeCharChoose(state, action);
  }

  return state;
}

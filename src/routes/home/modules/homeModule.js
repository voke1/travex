import update from 'react-addons-update';
import constants from './actionConstants';

const {SET_NAME} = constants;
export const setName = () => {
  return {
    type: SET_NAME,
    payload: 'Voke Olomu',
  };
};

export const handleSetName = (state, action) => {
  return update(state, {
    name: {
      $set: action.payload,
    },
  });
};

const initialState = {};
const ACTIOIN_HANDLERS = {
  SET_NAME: handleSetName,
};

export function HomeReducer(state = initialState, action) {
  const handler = ACTIOIN_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

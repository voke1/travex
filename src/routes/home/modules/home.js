import update from 'react-addons-update';
import constants from './actionConstants';

const {} = constants;

const initialState = {};
const ACTIOIN_HANDLERS = {};

export function HomeReducer(state = initialState, action) {
  const handler = ACTIOIN_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

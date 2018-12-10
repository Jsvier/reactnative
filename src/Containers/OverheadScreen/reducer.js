// Utils
import { getNewState } from '../../Lib/frontend';

const initialState = {
  overheads: [],
  overhead: []
};

export default function OverheadReducer(state = initialState, action) {
  switch(action.type) {

    case 'SHOW_SINGLE_OVERHEAD_SUCCESS': {
      const { payload: { response = [] }} = action;

      return getNewState(state, {
        overheads: response
      });
    }

    case 'SHOW_SINGLE_OVERHEAD_SUCCESS': {
      const { payload: { response = [] }} = action;

      return getNewState(state, {
        overhead: response
      });
    }

    default:
      return state;
  }
}

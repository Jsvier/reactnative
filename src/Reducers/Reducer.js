import { incrementCounter, decrementCounter, getAllOverhead, getAllOverheads } from "../Actions/actionTypes";

const initialState = { counter: 0, user: [], pallets: [] };

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounter:
      return { ...state, counter: state.counter + 1 };

    case getAllOverhead:
      return { ...state, counter: state.counter - 1 };
    
    case decrementCounter:
      return { ...state, counter: state.counter + 1 };

    case getAllOverheads:
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};

export default Reducer;

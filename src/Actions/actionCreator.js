import { incrementCounter, decrementCounter, getAllOverhead, getAllOverheads } from "./actionTypes";

const incrementAction = () => ({
  type: incrementCounter
});

const decrementAction = () => ({
  type: decrementCounter
});

const getAllOverheadsAction = () => ({
  type: getAllOverheads
});

const getAllOverheadAction = () => ({
  type: getAllOverhead
});

export { incrementAction, decrementAction, getAllOverheadsAction, getAllOverheadAction };

// API
import OverheadApi from './api';

// Actions
const LIST_OVERHEADS = 'LIST_OVERHEADS';
const SHOW_SINGLE_OVERHEAD = 'SHOW_SINGLE_OVERHEAD';

export function loadOverheads() {
  return {
    type: LIST_OVERHEADS,
    payload: OverheadApi.getAllOverheads()
  };
}

export function loadSingleOverhead(query) {
  return {
    type: SHOW_SINGLE_OVERHEAD,
    payload: OverheadApi.getSingleOverhead(query)
  };
}

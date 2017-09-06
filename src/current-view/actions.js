import {
  CHANGE_CURRENT_VIEW
} from './action-types';

export function setCurrentView(view) {
  return dispatch => {
    dispatch(changeCurrentView(view))
  }
}

function changeCurrentView(view) {
  return {
    type: CHANGE_CURRENT_VIEW,
    payload: view
  }
}

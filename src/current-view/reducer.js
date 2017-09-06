import {
  CHANGE_CURRENT_VIEW,
} from './action-types'

const initState = {
  currentView: 'home',
}

export function currentViewReducer(state = initState, { type, payload }) {
  switch (type) {
    case CHANGE_CURRENT_VIEW:
      return {
        ...state,
        currentView: payload
      }
    default:
      return state;
  }
}

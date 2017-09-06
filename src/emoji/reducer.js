import {
  CHANGE_EMOJI_EYEBROW_SUCCESS,
  CLEAR_EMOJI_EYEBROW,
  CHANGE_EMOJI_EYES_SUCCESS,
  CLEAR_EMOJI_EYES,
  CHANGE_EMOJI_MOUTH_SUCCESS,
  CLEAR_EMOJI_MOUTH,
  CHANGE_EMOJI_MOOD_SUCCESS,
  CLEAR_EMOJI_MOOD,
  RESET_EMOJI_PARTS_SUCCESS,
  GET_EMOJI_SUCCESS,
} from './action-types';
import emojiParts from './emojiParts';
import emojiList from './emojiList';

const initState = {
  parts: emojiParts,
  list: emojiList,
  currentEmoji: '',
  emojiBuilt: {
    eyebrows: '',
    eyes: '',
    mouth: '',
    mood: ''
  }
}

export function emojiReducer(state = initState, {type, payload}) {
  switch (type) {
    case CHANGE_EMOJI_EYEBROW_SUCCESS:
      return {
        ...state,
        emojiBuilt: {
          ...state.emojiBuilt,
          eyebrows: payload
        }
      }
    case CLEAR_EMOJI_EYEBROW:
      return {
        ...state,
        emojiBuilt: {
          ...state.emojiBuilt,
          eyebrows: ''
        }
      }
    case CHANGE_EMOJI_EYES_SUCCESS:
      return {
        ...state,
        emojiBuilt: {
          ...state.emojiBuilt,
          eyes: payload
        }
      }
    case CLEAR_EMOJI_EYES:
      return {
        ...state,
        emojiBuilt: {
          ...state.emojiBuilt,
          eyes: ''
        }
      }
    case CHANGE_EMOJI_MOUTH_SUCCESS:
      return {
        ...state,
        emojiBuilt: {
          ...state.emojiBuilt,
          mouth: payload
        }
      }
    case CLEAR_EMOJI_MOUTH:
      return {
        ...state,
        emojiBuilt: {
          ...state.emojiBuilt,
          mouth: ''
        }
      }
    case CHANGE_EMOJI_MOOD_SUCCESS:
      return {
        ...state,
        emojiBuilt: {
          ...state.emojiBuilt,
          mood: payload
        }
      }
    case CLEAR_EMOJI_MOOD:
      return {
        ...state,
        emojiBuilt: {
          ...state.emojiBuilt,
          mood: ''
        }
      }
    case RESET_EMOJI_PARTS_SUCCESS:
      return {
        ...state,
        emojiBuilt: initState.emojiBuilt
      }
    case GET_EMOJI_SUCCESS:
      return {
        ...state,
        currentEmoji: payload
      }
    default:
      return state;
  }
}

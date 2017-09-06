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
  GET_EMOJI_SUCCESS
} from './action-types';
import emojiList from './emojiList';


export function setEmojiEyebrow(id) {
  return dispatch => dispatch(setEmojiEyebrowSuccess(id));
}

function setEmojiEyebrowSuccess(id) {
  return {
    type: CHANGE_EMOJI_EYEBROW_SUCCESS,
    payload: id
  }
}

export function clearEmojiEyebrow() {
  return dispatch => dispatch({ type: CLEAR_EMOJI_EYEBROW });
}

export function setEmojiEyes(id) {
  return dispatch => dispatch(setEmojiEyesSuccess(id));
}

function setEmojiEyesSuccess(id) {
  return {
    type: CHANGE_EMOJI_EYES_SUCCESS,
    payload: id
  }
}

export function clearEmojiEyes() {
  return dispatch => dispatch({ type: CLEAR_EMOJI_EYES });
}

export function setEmojiMouth(id) {
  return dispatch => dispatch(setEmojiMouthSuccess(id));
}

function setEmojiMouthSuccess(id) {
  return {
    type: CHANGE_EMOJI_MOUTH_SUCCESS,
    payload: id
  }
}

export function clearEmojiMouth() {
  return dispatch => dispatch({ type: CLEAR_EMOJI_MOUTH });
}

export function setEmojiMood(id) {
  return dispatch => dispatch(setEmojiMoodSuccess(id));
}

function setEmojiMoodSuccess(id) {
  return {
    type: CHANGE_EMOJI_MOOD_SUCCESS,
    payload: id
  }
}

export function clearEmojiMood() {
  return dispatch => dispatch({ type: CLEAR_EMOJI_MOOD });
}

export function resetEmojiParts() {
  return dispatch => dispatch(resetEmojiPartsSuccess());
}

function resetEmojiPartsSuccess() {
  return {
    type: RESET_EMOJI_PARTS_SUCCESS
  }
}

export function getEmoji() {
  const randomIndex = Math.floor(Math.random() * emojiList.length);
  const emoji = emojiList[randomIndex];
  return dispatch => dispatch(getEmojiSuccess(emoji));
}

function getEmojiSuccess(emoji) {
  return {
    type: GET_EMOJI_SUCCESS,
    payload: emoji
  }
}

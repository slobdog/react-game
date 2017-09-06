import React from 'react';
import { connect } from 'react-redux';

import EmojiPartsList from '../emoji-parts-list';
import { emojiActions } from '../../../emoji';

const EmojiPartsNav = (props) => {
  const {
    emojiParts,
    setEmojiEyebrow,
    setEmojiEyes,
    setEmojiMouth,
    setEmojiMood,
    clearEmojiEyebrow,
    clearEmojiEyes,
    clearEmojiMouth,
    clearEmojiMood
  } = props;
  
  return (
  <div className="draw__option">
    <ul>
      <EmojiPartsList emojiParts={emojiParts} context="eyebrows" clickAction={setEmojiEyebrow} clearAction={clearEmojiEyebrow} listImage="parts-01" />
      <EmojiPartsList emojiParts={emojiParts} context="eyes" clickAction={setEmojiEyes} clearAction={clearEmojiEyes} listImage="parts-12" />
      <EmojiPartsList emojiParts={emojiParts} context="mouths" clickAction={setEmojiMouth} clearAction={clearEmojiMouth} listImage="parts-36" />
      <EmojiPartsList emojiParts={emojiParts} context="moods" clickAction={setEmojiMood} clearAction={clearEmojiMood} listImage="parts-31" />
    </ul>
  </div>
)};

const mapStateToProps = state => ({
  emojiParts: state.emoji.parts,
});

const mapDispatchToProps = {
  setEmojiEyebrow: emojiActions.setEmojiEyebrow,
  clearEmojiEyebrow: emojiActions.clearEmojiEyebrow,
  setEmojiEyes: emojiActions.setEmojiEyes,
  clearEmojiEyes: emojiActions.clearEmojiEyes,
  setEmojiMouth: emojiActions.setEmojiMouth,
  clearEmojiMouth: emojiActions.clearEmojiMouth,
  setEmojiMood: emojiActions.setEmojiMood,
  clearEmojiMood: emojiActions.clearEmojiMood,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmojiPartsNav);

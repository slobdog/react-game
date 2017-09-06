import React from 'react';

const Emoji = ({ emojiBuilt }) => {
  const getEmojiPartStyles = (type, part) => ({ backgroundImage: 'url(../images/' + type + '/' + part + '.png)' });
  return (
    <div className="area__base jello animated">
      <div className="base__element area__mood-shading" style={getEmojiPartStyles('moods', emojiBuilt.mood)}></div>
      <div className="base__element area__eyebrows" style={getEmojiPartStyles('eyebrows', emojiBuilt.eyebrows)}></div>
      <div className="base__element area__eyes" style={getEmojiPartStyles('eyes', emojiBuilt.eyes)}></div>
      <div className="base__element area__mouth" style={getEmojiPartStyles('mouths', emojiBuilt.mouth)}></div>
    </div>
  )
};

export default Emoji;

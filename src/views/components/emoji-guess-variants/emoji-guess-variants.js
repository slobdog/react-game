import React from 'react';

const EmojiGuessVariants = ({ emojiList, onEmojiGuessClick, answers }) => (
  <div className="guess-emotion zoomIn animated">
    <ul>
      { emojiList.map((emoji, index) => (
        <li className={"emotion__item " + ( answers[emoji] ? answers[emoji] : '' )}
            key={index} onClick={() => onEmojiGuessClick(emoji)}>
          <span>{ emoji }</span>
        </li>
      )) }
    </ul>
  </div>
);

export default EmojiGuessVariants;

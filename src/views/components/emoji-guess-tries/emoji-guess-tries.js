import React from 'react';

const EmojiGuessTries = ({ wrongAnswers }) => (
  <div className="tries-left fadeInLeftBig animated">
    <ul>
      <li className="tries-left__item">
        <p>tries left:</p>
      </li>
      { wrongAnswers.map((wrongAnswerClass, index) => (
        <li key={index} className={"tries-left__item " + (wrongAnswerClass ? wrongAnswerClass : '')}></li>
      )) }
    </ul>
  </div>
);

export default EmojiGuessTries;

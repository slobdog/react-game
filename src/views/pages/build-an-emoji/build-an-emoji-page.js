import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentView } from '../../../current-view';
import { emojiActions } from '../../../emoji';
import HomePage from '../home';
import HowToPlayPage from '../how-to-play';
import ChooseEmojiPage from '../choose-emoji';
import DrawEmojiPage from '../draw-emoji';
import GuessEmojiPage from '../guess-emoji';


class BuildAnEmojiPage extends Component {
  render() {
    const { currentView, setCurrentView, emojiBuilt, resetEmojiParts, currentEmoji, emojiList, getEmoji } = this.props;
    let component;

    switch (currentView) {
      case 'home':
        component = <HomePage setCurrentView={setCurrentView} />;
        break;
      case 'how-to-play':
        component = <HowToPlayPage setCurrentView={setCurrentView} />;
        break;
      case 'choose-emoji':
        component = <ChooseEmojiPage
          getEmoji={getEmoji}
          setCurrentView={setCurrentView}
          currentEmoji={currentEmoji}
          resetEmojiParts={resetEmojiParts}
        />;
        break;
      case 'draw-emoji':
        component = <DrawEmojiPage
          setCurrentView={setCurrentView}
          emojiBuilt={emojiBuilt}
          resetEmojiParts={resetEmojiParts}
        />;
        break;
      case 'guess-emoji':
        component = <GuessEmojiPage
          setCurrentView={setCurrentView}
          emojiBuilt={emojiBuilt}
          emojiList={emojiList}
          currentEmoji={currentEmoji}
        />;
        break;
      default:
        component = <HomePage setCurrentView={setCurrentView} />;
    }

    return (<div>{ component }</div>);
  }
}

const mapStateToProps = state => ({
  currentView: state.views.currentView,
  emojiBuilt: state.emoji.emojiBuilt,
  currentEmoji: state.emoji.currentEmoji,
  emojiList: state.emoji.list,
});

const mapDispatchToProps = {
  setCurrentView: setCurrentView,
  resetEmojiParts: emojiActions.resetEmojiParts,
  getEmoji: emojiActions.getEmoji,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildAnEmojiPage);

import React, { Component } from 'react';

import Emoji from '../../components/emoji';
import EmojiGuessVariants from '../../components/emoji-guess-variants';
import EmojiGuessTries from '../../components/emoji-guess-tries';


class GuessEmojiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
      wrongAnswers: [0, 0, 0],
      currentGuessTry: 0,
      gameResult: '',
      isGuessCorrectResultShown: false,
      isGuessWrongResultShown: false,
    };
    this.guessEmoji = this.guessEmoji.bind(this);
    this.endGame = this.endGame.bind(this);
    this.hideGuessResult = this.hideGuessResult.bind(this);
  }
  guessEmoji(emoji) {
    let { gameResult, wrongAnswers, currentGuessTry, isGuessCorrectResultShown, answers, isGuessWrongResultShown } = this.state;
    let isGuessTryNew = Object.keys(answers).indexOf(emoji) === -1;
    answers[emoji] = this.props.currentEmoji === emoji ? 'emotion__correct' : 'emotion__error';
    if (isGuessTryNew) {
      if (this.props.currentEmoji !== emoji) {
        wrongAnswers[currentGuessTry] = 'tries-left__subtract';
        isGuessWrongResultShown = true;
        currentGuessTry++;
      } else if (this.props.currentEmoji === emoji) {
        gameResult = 'won';
        isGuessCorrectResultShown = true;
      }
      if (this.state.currentGuessTry < 3 && this.state.gameResult === '') this.setState({ answers, wrongAnswers, currentGuessTry, gameResult, isGuessCorrectResultShown, isGuessWrongResultShown });
    }
    if (isGuessWrongResultShown) {
      setTimeout(() => this.setState({isGuessWrongResultShown: false}), 2000);
    }
  }
  endGame() {
    const { setCurrentView } = this.props;
    setCurrentView('home');
  }
  hideGuessResult() {
    this.setState({ isGuessCorrectResultShown: false, isGuessWrongResultShown: false });
  }
  componentWillUnmount() {
    this.setState({});
  }
  render() {
    const { emojiBuilt, emojiList } = this.props;
    const { gameResult, isGuessCorrectResultShown, isGuessWrongResultShown } = this.state;
    return (
      <main>
        <section className="content">
          <div className="wrapper">
            <div className="game-play">
              <div className="col-md-7">
                <EmojiGuessTries wrongAnswers={this.state.wrongAnswers} />
              </div>
              <div className="col-md-5 control-buttons text-right fadeInRightBig animated">
                <button className="btn base-btn end-game-btn content-btn" onClick={this.endGame}>end game</button>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="col-md-7">
              <div className="draw__area">
                <Emoji emojiBuilt={emojiBuilt} />
              </div>
            </div>
            <div className="col-md-5">
              <EmojiGuessVariants
                emojiList={emojiList}
                onEmojiGuessClick={this.guessEmoji}
                answers={this.state.answers} />
            </div>
          </div>
          { (gameResult === 'won' && isGuessCorrectResultShown) ? (
            <div className="guess-message message__correct" onClick={this.hideGuessResult}>
              <div className="message__line flipInX animated">
                <p>Correct</p>
              </div>
            </div>
          ) : '' }
          { (isGuessWrongResultShown) ? (
            <div className="guess-message message__error" onClick={this.hideGuessResult}>
              <div className="message__line flipInX animated">
                <p>Try Again!</p>
              </div>
            </div>
          ) : '' }
        </section>
      </main>
    );
  }
}

export default GuessEmojiPage;

import React, { Component } from 'react';

import Modal from '../../components/modal';
import EmojiPartsNav from '../../components/emoji-parts-nav';
import Emoji from '../../components/emoji';


class DrawEmojiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false
    }
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    return () => this.setState({ isModalShown: false })
  }
  render() {
    const { emojiBuilt, resetEmojiParts, setCurrentView } = this.props;
    return (
      <main>
        <section className="content">
          <div className="wrapper wrapper-draw">
            <div className="game-play">
              <div className="col-md-offset-7 col-md-5 control-buttons text-center">
                <button className="btn base-btn end-game-btn content-btn" onClick={() => setCurrentView('home')}>end game</button>
              </div>
            </div>
            <EmojiPartsNav />
            <div className="draw">

              <div className="col-sm-offset-5 col-sm-7">
                <div className="draw__area">
                  <Emoji emojiBuilt={emojiBuilt} />
                    <div className="control-buttons text-center">
                      <ul>
                        <li className="col-xs-6"><button className="btn secondary-btn btn-start-over" onClick={resetEmojiParts}></button></li>
                        <li className="col-xs-6"><button className="btn secondary-btn btn-done" onClick={() => setCurrentView('guess-emoji')}></button></li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal isShown={this.state.isModalShown} onCloseModal={this.closeModal} />
      </main>
    );
  };
}

export default DrawEmojiPage;

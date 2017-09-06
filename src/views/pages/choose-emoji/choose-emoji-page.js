import React, { Component } from 'react';

class ChooseEmojiPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isEmojiShown: false };
    this.handleSetCurrentView = this.handleSetCurrentView.bind(this);
  };
  componentWillMount() {
    this.props.getEmoji();
    this.props.resetEmojiParts();
  }
  showEmoji() {
    return () => this.setState({ isEmojiShown: true });
  };
  handleSetCurrentView(view) {
    const { setCurrentView } = this.props;
    return () => setCurrentView(view);
  };
  render() {
    const btns = this.state.isEmojiShown ? (
      <div>
        <div className="look-emotion look__show" onClick={this.showEmoji()}>
          { this.props.currentEmoji }
        </div>
        <div className="control-buttons text-center ">
          <button className="btn base-btn start-btn content-btn" onClick={this.handleSetCurrentView('draw-emoji')}>start</button>
        </div>
      </div>
    ) : (
      <div className="look-emotion look__show" style={{background: '#CCCCCC'}} onClick={this.showEmoji()}>
        Show Me
      </div>
    );
    return (
      <main>
        <section className="content">
          <div className="wrapper">
            <div className="description text-center">
              <div className="description__team">
                the emotion you have to draw is
              </div>
              <div className="descripton__task">
                the emotion you have to draw is
              </div>
            </div>
            { btns }
          </div>
        </section>
      </main>
    );
  }
}

export default ChooseEmojiPage;

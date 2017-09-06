import React from 'react';


const HomePage = ({ setCurrentView }) => {
  return (
    <main>
      <section className="front-page">
        <div className="front-bg fadeIn animated"></div>
        <div className="wrapper wrapper-front">
          <div className="control-buttons text-right bounceInDown animated">
            <div><button className="btn base-btn new-game-btn" onClick={() => setCurrentView('choose-emoji')}>New game</button></div>
            <div><button className="btn base-btn how-to-play-btn" onClick={() => setCurrentView('how-to-play')}>how to play</button></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

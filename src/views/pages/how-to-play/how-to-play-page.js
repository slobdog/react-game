import React from 'react';

const HowToPlayPage = ({ setCurrentView }) => {
  const handleSetCurrentView = (view) => () => setCurrentView(view);
  return (
    <main>
      <header>
        <h1>how to play</h1>
      </header>

      <section className="content">
        <div className="wrapper">
          <div className="description">
            <div className="description__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet aspernatur
                deserunt dolor dolorem ea, enim illo illum ipsa iste libero obcaecati quae quaerat,
                quidem ratione reiciendis totam veritatis.
              </p>
            </div>
          </div>
          <ul className="rules">
            <li className="rules__item clearfix">
              <div className="rules__img">
                <img src="images/assets_team.png" alt="team" className="rules__img" />
              </div>
              <div className="rules__description">
                Determine the number of teams
              </div>
            </li>
            <li className="rules__item clearfix">
              <div className="rules__img">
                <img src="images/howto-question.png" alt="question" className="rules__img" />
              </div>
              <div className="rules__description">
                Determine the number of teams
              </div>
            </li>
            <li className="rules__item clearfix">
              <div className="rules__img">
                <img src="images/howto-crown.png" alt="crown" className="rules__img" />
              </div>
              <div className="rules__description">
                Determine the number of teams
              </div>
            </li>
          </ul>
          <div className="control-buttons text-right">
            <button className="btn base-btn back-btn content-btn" onClick={handleSetCurrentView('home')}>back</button>
          </div>
        </div>
      </section>
    </main>
  )
};

export default HowToPlayPage;

import React from 'react';

const EmojiPartsList = ({ emojiParts, context, clickAction, listImage, clearAction }) => {
  const toggleList = () => {
    const dropDownElement = document.querySelector('.option__item.' + context)
    // const dropDownElements = document.querySelectorAll('.option__item.active')
    // for (let i = 0; i < dropDownElements.length; i++) {
    //   dropDownElements[i].classList.remove('active');
    // }
    if (dropDownElement.classList.contains('active')) {
      dropDownElement.classList.remove('active')
    } else {
      dropDownElement.classList.add('active')
    }
  }
  const handleClickAction = (emojiPart, e) => {
    e.preventDefault();
    clickAction(emojiPart);
  }
  return (
    <li className={"option__item fadeInLeft animated clearfix " + context} data-type-emotion={context} onClick={() => toggleList()}>
      <div className="option__field">
        <div className="option__img">
          <img src={"images/" + context + "/" + listImage + ".png"} alt={context} />
        </div>
        <div className="option__description">
          { context }
        </div>
      </div>

      <div className="option__dropdown">
        <button className="btn btn-default" onClick={clearAction}>Clear</button>
        <ul>
          { emojiParts[context].map((emojiPart, index) => (
            <li key={index} onClick={(e) => handleClickAction(emojiPart, e)}>
              <img src={"images/" + context + "/" + emojiPart + ".png"} alt={context + "-parts"} />
            </li>
          )) }
        </ul>
      </div>
    </li>
  )
};

export default EmojiPartsList;

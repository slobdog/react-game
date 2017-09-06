import React from 'react';

const Modal = ({ isShown, onCloseModal }) => (
  <div>
    { isShown ? (
        <div className="modal-contaiter">
          <div className="modal-content review-modal flipInX animated">
            <div className="modal__header">
              Review
              <button className="close-btn" onClick={onCloseModal()}></button>
            </div>
            <div className="modal__body">
              <p>Cool</p>
            </div>
          </div>
        </div>
      ) : '' }
  </div>
);

export default Modal;

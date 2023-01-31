import React from 'react';

function PopupConfirm({ name, isOpen, setIsConfirmPopup, setIsSignInPopup, setIsSignUpPopup }) {
  function afterConfirm() {
    setIsConfirmPopup(false);
    setIsSignInPopup(true);
  }

  return (
    <div
      className={`popup popup_type_${name} && ${isOpen && 'popup_open'
        } `}
    >
      <div className="popup-confirm__body">
        <button
          aria-label="close"
          type="button"
          className="popup__close"
          onClick={() => {
            setIsSignInPopup(false)
            setIsSignUpPopup(false)
            setIsConfirmPopup(false)
          }}
        ></button>
        <h2 className="popup-confirm__title">
          Registration successfully completed!
        </h2>
        <p className="popup-confirm__link" onClick={afterConfirm}>
          Sign in
        </p>
      </div>
    </div>
  );
}

export default PopupConfirm;

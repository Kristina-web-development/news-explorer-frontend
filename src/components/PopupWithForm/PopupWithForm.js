import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PopupWithForm({
    setIsSignInPopup,
    setIsSignUpPopup,
    linkName,
    onSubmit,
    name,
    title,
    disabledButtonClass,
    disableButton,
    buttonText,
    children,
    submitError,


    // isOpen,
    // onClose, 
    // openSigninPopup,
    // openSignupPopup,
}) {
    // const fadeIn = isOpen ? "popup_fadein" : null;
    const fadeIn = "popup_fadein"

    useEffect(() => {
        const escKeyClose = (e) => {
            if (e.keyCode === 27) {
                // onClose();
                setIsSignInPopup(false)
                setIsSignUpPopup(false)
            }
        }

        window.addEventListener('keydown', escKeyClose)

        return () => window.removeEventListener('keydown', escKeyClose)
    }, [
        // onClose
    ])

    useEffect(() => {
        const overlayClose = (e) => {
            if (e.target.classList.contains('popup_fadein')) {
                // onClose();
                setIsSignInPopup(false)
                setIsSignUpPopup(false)
            }
        }
        window.addEventListener('mouseup', overlayClose)
        return () => window.removeEventListener('mouseup', overlayClose)
    }, [
        // onClose
    ])

    const onSpanClick = () => {
        if (name === 'signin') {
            // onClose();
            setIsSignInPopup(false)
            setIsSignUpPopup(true)
        } else if (name === 'signup') {
            setIsSignInPopup(true)
            setIsSignUpPopup(false)
            // onClose();
        }
    }

    return (
        <section
            className={`popup ${fadeIn}`}
            id={`${name}-popup`}
        >
            <div className={`popup__container container `} >
                <button
                    type="button"
                    className={`popup__close-button close-button`}
                    // onClick={onClose}
                    onClick={() => {
                        setIsSignInPopup(false)
                        setIsSignUpPopup(false)
                    }}
                ></button>
                <div className={`popup__form-container`}>
                    <h2 className={`popup__header`}>{title}</h2>
                    <form
                        className={`${name}__form popup__form`}
                        name={`${name}`}
                        onSubmit={onSubmit}
                    >
                        {children}
                        <span
                            className={`popup__form-submitError`}
                        >
                            {submitError}
                        </span>
                        <fieldset className="popup__form-button-fieldset">
                            <button
                                type="submit"
                                className={`popup__form-button ${disabledButtonClass}`}
                                disabled={disableButton}
                            >
                                {buttonText}
                            </button>
                        </fieldset>
                    </form>
                    <p className='popup__link'> or <Link to="/" className='popup__link-span' onClick={onSpanClick}>{linkName}</Link></p>
                </div>
            </div>
        </section >
    );
}

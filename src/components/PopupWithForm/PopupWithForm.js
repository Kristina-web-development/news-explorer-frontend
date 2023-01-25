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
    isValid


    // isOpen,
    // onClose, 
    // openSigninPopup,
    // openSignupPopup,
}) {
    // const fadeIn = isOpen ? "popup_fadein" : null;
    const fadeIn = "popup__fadein"

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
    })

    useEffect(() => {
        const overlayClose = (e) => {
            if (e.target.classList.contains('popup__fadein')) {
                // onClose();
                setIsSignInPopup(false)
                setIsSignUpPopup(false)
            }
        }
        window.addEventListener('mouseup', overlayClose)
        return () => window.removeEventListener('mouseup', overlayClose)
    })

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
                    className={`popup__close_button close_button`}
                    // onClick={onClose}
                    onClick={() => {
                        setIsSignInPopup(false)
                        setIsSignUpPopup(false)
                    }}
                ></button>
                <div className={`popup__form_container`}>
                    <h2 className={`popup__header`}>{title}</h2>
                    <form
                        className={`popup__form ${name}__form`}
                        name={`${name}`}
                        onSubmit={onSubmit}
                    >
                        {children}
                        <span
                            className={`popup__form_submitError`}
                        >
                            {submitError}
                        </span>
                        <fieldset className="popup__form_button_fieldset">
                            <button
                                type="submit"
                                className={`popup__form_button 
                                // ${disabledButtonClass}
                                `}
                                disabled={disableButton}
                                style={{
                                    backgroundColor: isValid ? '#2F71E5' : '#E6E8EB',
                                    color: isValid ? '#FFFFFF' : '#B6BCBF',
                                }}
                            >
                                {buttonText}
                            </button>
                        </fieldset>
                    </form>
                    <p className='popup__link'> or <Link to="/" className='popup__link_span' onClick={onSpanClick}>{linkName}</Link></p>
                </div>
            </div>
        </section >
    );
}

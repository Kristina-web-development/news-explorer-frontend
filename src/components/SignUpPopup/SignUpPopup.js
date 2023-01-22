import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditProfilePopup(props) {
    const [values, setValues] = useState({ email: '', password: '', name: '' });
    const [errors, setErrors] = useState({ email: '', password: '', name: '' });
    const [isValid, setIsValid] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const disabledButtonClass = !disableButton ? "" : "popup__form-button_disabled"
    const showErrorMessageClass = isValid ? "" : "form__input-error_active"
    const showErrorInputClass = isValid ? "" : "form__input_type_error"


    useEffect(() => {
        setValues({ email: '', password: '', name: '' });
        setErrors({ email: '', password: '', name: '' });
        setIsValid(true);
        setDisableButton(true)
    }, [
        // props.isOpen
    ]);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
        setDisableButton(isValid ? false : true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        props.setRegUsers((users) => [...users, values])
        props.setIsSignUpPopup(false)
        props.setIsSignInPopup(true)
        // props.onSignup(values);
        // console.log(values)
    }
    return (
        <PopupWithForm
            setIsSignInPopup={props.setIsSignInPopup}
            setIsSignUpPopup={props.setIsSignUpPopup}
            name="signup"
            title="Sign up"
            buttonText="Sign up"
            onSubmit={handleSubmit}
            linkName="Sign in"
            disabledButtonClass={disabledButtonClass}
            disableButton={disableButton}

        // isOpen={true}
        // isOpen={props.isOpen}
        // onClose={props.onClose}
        // submitError={props.submitError}
        // openSignupPopup={props.openSignupPopup}
        // openSigninPopup={props.openSigninPopup}
        >
            <fieldset className="signup__form-fieldset">
                <label className='signup__form-lable signup__form-lable-email'>Email</label>
                <input
                    className={`signup__form-input ${showErrorInputClass}`}
                    type="email"
                    id="signup-email-input"
                    placeholder="Enter email"
                    name="email"
                    value={values.email || ''}
                    onChange={handleChange}
                    required
                />
                <span
                    className={`form__input-error ${showErrorMessageClass}`}
                >
                    {errors.email}
                </span>
                <label className='signup__form-lable signup__form-lable-password'>Password</label>
                <input
                    className={`signup__form-input ${showErrorInputClass}`}
                    type="password"
                    id="signup-password-input"
                    placeholder="Enter password"
                    name="password"
                    value={values.password || ''}
                    onChange={handleChange}
                    minLength={8}
                    maxLength={30}
                    required
                />
                <span
                    className={`form__input-error ${showErrorMessageClass}`}
                >
                    {errors.password}
                </span>
                <label className='signup__form-lable signup__form-lable-username'>Username</label>
                <input
                    className={`signup__form-input ${showErrorInputClass}`}
                    type="text"
                    id="signup-username-input"
                    placeholder="Enter your username"
                    name="name"
                    value={values.name || ''}
                    onChange={handleChange}
                    minLength={2}
                    maxLength={30}
                    required
                />
                <span
                    className={`form__input-error ${showErrorMessageClass}`}
                >
                    {errors.name}
                </span>
            </fieldset>
        </PopupWithForm>
    );

}
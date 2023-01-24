import React, { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditProfilePopup({
    setIsSignInPopup,
    setIsSignUpPopup,
    setLoggedIn,
    regUsers,
    setCurrentUser
}) {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [isValid, setIsValid] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const disabledButtonClass = !disableButton ? "" : "popup__form_button_disabled"
    const showErrorMessageClass = isValid ? "" : "form__input_error_active"
    const showErrorInputClass = isValid ? "" : "form__input_type_error"

    useEffect(() => {
        setValues({ email: '', password: '' });
        setErrors({ email: '', password: '', });
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
        const user = regUsers.find(user => user.email.toLowerCase() === values.email.toLowerCase() && user.password === values.password)
        setLoggedIn(true)
        setCurrentUser(user)
        setIsSignInPopup(false)
        setIsSignUpPopup(false)

        // props.onSignin(values);
    }

    return (
        <PopupWithForm
            setIsSignInPopup={setIsSignInPopup}
            setIsSignUpPopup={setIsSignUpPopup}
            name="signin"
            title="Sign in"
            buttonText="Sign in"
            onSubmit={handleSubmit}
            linkName="Sign up"
            disabledButtonClass={disabledButtonClass}
            disableButton={disableButton}

        // isOpen={true}
        // isOpen={props.isOpen}
        // onClose={props.onClose}
        // openSignupPopup={props.openSignupPopup}
        // openSigninPopup={props.openSigninPopup}
        // submitError={props.submitError}
        >
            <fieldset className="signin__form_fieldset">
                <label className='signin__form_lable signin__form_lable_email'>Email</label>
                <input
                    className={`signin__form_input ${showErrorInputClass}`}
                    type="email"
                    id="signin-email-input"
                    placeholder="Enter email"
                    name="email"
                    value={values.email || ''}
                    onChange={handleChange}
                    required
                />
                <span
                    className={`signin__form_input-error  ${showErrorMessageClass}`}
                >
                    {errors.email}
                </span>
                <label className='signin__form_lable signin__form_lable_password'>Password</label>
                <input
                    className={`signin__form_input ${showErrorInputClass}`}
                    type="password"
                    id="signin-password-input"
                    placeholder="Enter password"
                    name="password"
                    value={values.password || ''}
                    onChange={handleChange}
                    required
                />
                <span
                    className={`signin__form_input_error ${showErrorMessageClass}`}
                >
                    {errors.password}
                </span>
            </fieldset>
        </PopupWithForm>

    );
}


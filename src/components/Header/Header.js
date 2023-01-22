import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import NavBar from '../NavBar/NavBar';
// import CurrentUserContext from '../../context/CurrentUserContext';
import { useLocation } from 'react-router';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

export default function Header({
    isLoggedIn,
    setIsSignInPopup,
    setLoggedIn,
    setCurrentUser,
    isSignUpPopup,
    isSignInPopup
}) {
    // const currentUser = React.useContext(CurrentUserContext);
    let location = useLocation();

    return (
        <>
            {location.pathname === "/" ? (
                <header className='app_header'>
                    <NavBar
                        isLoggedIn={isLoggedIn}
                        setIsSignInPopup={setIsSignInPopup}
                        setCurrentUser={setCurrentUser}
                        setLoggedIn={setLoggedIn}
                        isSignUpPopup={isSignUpPopup}
                        isSignInPopup={isSignInPopup}
                    />
                    <div className='header-content'>
                        <h1 className='header-content-title'>What's going on in the world?</h1>
                        <p className='header-content-subtitle'>Find the latest news on any topic and save them in your personal account.</p>
                        <SearchForm />
                    </div>
                </header>) : (
                <header className='app_header app_header-color_white' >
                    <NavBar isLoggedIn={isLoggedIn} />
                    <SavedNewsHeader isLoggedIn={isLoggedIn} />
                </header>

            )}
        </>
    )
}
import React, { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useLocation, Link } from "react-router-dom";
import closeBtn from '../../images/Close_Icon.svg'
import hamburgerBlack from '../../images/hamburger_black.svg'
import hamburgerWhite from '../../images/hamburger.svg'

export default function NavBar({ isLoggedIn,
    setIsSignInPopup,
    setLoggedIn,
    setCurrentUser,
    isSignUpPopup,
    isSignInPopup }) {
    const currentUser = useContext(CurrentUserContext);
    let location = useLocation();

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [toggleMenu, setToggleMenu] = useState(false);

    const screenToogleSignUp = screenWidth < 450 && toggleMenu && isSignUpPopup
    const screenToogleSignIn = screenWidth < 450 && toggleMenu && isSignInPopup

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', changeWidth);
    }, []);

    return (
        <>
            {location.pathname === "/" ?
                <nav className="header__navbar"
                    style={{
                        backgroundColor: screenWidth < 450 && toggleMenu ? isSignUpPopup || isSignInPopup ? null : "#1a1b22"
                            : null, height: isSignUpPopup || isSignInPopup ? `${48 + 19 + 0.5}px` : null,
                        borderBottom: "0.5px solid #ffffff"
                    }}>
                    {screenToogleSignUp || screenToogleSignIn ? null : <>
                        <div className="header__logo">NewsExplorer</div>
                        <button className="header__menuBtn" onClick={() => setToggleMenu(!toggleMenu)}>
                            <img src={toggleMenu ? closeBtn : hamburgerWhite} alt={toggleMenu ? "Close Button" : "Hamburger Button"} />
                        </button>
                        {(screenWidth > 450 || toggleMenu) &&
                            <div className="header__navigation">
                                <Link
                                    to="/"
                                    className="header__home_button header__home_button_active"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Home
                                </Link>
                                {isLoggedIn ? <>
                                    <Link
                                        to="/saved-news"
                                        className="header__saved_articles"
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        Saved articles
                                    </Link>
                                    <button className="header__logout" onClick={() => {
                                        setLoggedIn(false)
                                        setCurrentUser({})
                                    }}>
                                        <div className="header__logout_text">{currentUser.name}</div>
                                        <div className="header__logout_icon" />
                                    </button>
                                </> : <button className="header__login_button" onClick={() => setIsSignInPopup(true)}>Sign in</button>}
                            </div>}
                    </>}
                </nav>
                :
                <nav className="header__navbar"
                    style={{
                        backgroundColor: screenWidth < 450 && toggleMenu ? "#1a1b22" : null,
                        borderBottom: "0.5px solid #777777"
                    }}
                >
                    <div className={`header__logo ${toggleMenu ? null : "header__logo_color_black"}`}>NewsExplorer</div>
                    <button className="header__menuBtn" onClick={() => setToggleMenu(!toggleMenu)}>
                        <img src={toggleMenu ? closeBtn : hamburgerBlack} alt={toggleMenu ? "Close Button" : "Hamburger Button"} />
                    </button>
                    {(screenWidth > 450 || toggleMenu) &&
                        <div className="header__navigation">
                            <Link
                                to="/"
                                className={`header__home_button ${toggleMenu ? null : "header__home_button_black"}`}
                                onClick={() => setToggleMenu(false)}
                            >
                                Home
                            </Link>
                            {isLoggedIn && <>
                                <Link
                                    to="/saved-news"
                                    className={`header__saved_articles ${toggleMenu ? "header__home_button_active" : "header__saved_articles_black"}`}
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Saved articles
                                </Link>
                                <button className={`header__logout ${toggleMenu ? null : "header__logout_black"}`}>
                                    <div className="header__logout_text">{currentUser.name}</div>
                                    <div className="header__logout_icon header__logout_icon_black" />
                                </button>
                            </>}
                        </div>}
                </nav>}
        </>)
}
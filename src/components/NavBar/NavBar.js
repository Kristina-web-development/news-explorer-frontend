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

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', changeWidth);
    }, []);

    return (
        <>
            {location.pathname === "/" ?
                <div className="header-navbar"
                    style={{
                        backgroundColor: screenWidth < 767 && toggleMenu ? isSignUpPopup || isSignInPopup ? null : "#1a1b22"
                            : null, height: isSignUpPopup || isSignInPopup ? `${48 + 19 + 0.5}px` : null
                    }}>
                    {
                        isSignUpPopup || isSignInPopup ? null : <>
                            <div className="header-logo">NewsExplorer</div>
                            <button className="header-menuBtn" onClick={() => setToggleMenu(!toggleMenu)}>
                                <img src={toggleMenu ? closeBtn : hamburgerWhite} alt={toggleMenu ? "Close Button" : "Hamburger Button"} />
                            </button>
                            {(screenWidth > 767 || toggleMenu) &&
                                <div className="header-navigation">
                                    <Link
                                        to="/"
                                        className="header-home-button header-home-button_active"
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        Home
                                    </Link>
                                    {isLoggedIn ? <>
                                        <Link
                                            to="/saved-news"
                                            className="header-saved-articles"
                                            onClick={() => setToggleMenu(false)}
                                        >
                                            Saved articles
                                        </Link>
                                        <button className="header-logout" onClick={() => {
                                            setLoggedIn(false)
                                            setCurrentUser({})
                                        }}>
                                            <div className="header-logout__text">{currentUser.name}</div>
                                            <div className="header-logout__icon" />
                                        </button>
                                    </> : <button className="header-login-button" onClick={() => setIsSignInPopup(true)}>Sign in</button>}
                                </div>}

                        </>
                    }

                </div>
                :
                <div className="header-navbar"
                    style={{ backgroundColor: screenWidth < 767 && toggleMenu ? "#1a1b22" : null }}
                >
                    <div className={`header-logo ${toggleMenu ? null : "header-logo-color-black"}`}>NewsExplorer</div>
                    <button className="header-menuBtn" onClick={() => setToggleMenu(!toggleMenu)}>
                        <img src={toggleMenu ? closeBtn : hamburgerBlack} alt={toggleMenu ? "Close Button" : "Hamburger Button"} />
                    </button>
                    {(screenWidth > 767 || toggleMenu) &&
                        <div className="header-navigation">
                            <Link
                                to="/"
                                className={`header-home-button ${toggleMenu ? null : "header-home-button-color-black"}`}
                                onClick={() => setToggleMenu(false)}
                            >
                                Home
                            </Link>
                            {isLoggedIn && <>
                                <Link
                                    to="/saved-news"
                                    className={`header-saved-articles ${toggleMenu ? "header-home-button_active" : "header-saved-articles-black"}`}
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Saved articles
                                </Link>
                                <button className={`header-logout ${toggleMenu ? null : "header-logout-black"}`}>
                                    <div className="header-logout__text">{currentUser.name}</div>
                                    <div className="header-logout__icon header-logout__icon-black" />
                                </button>
                            </>}
                        </div>}
                </div>}
        </>)
}
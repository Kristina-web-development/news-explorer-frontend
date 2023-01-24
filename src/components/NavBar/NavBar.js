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
                <nav className="header__navbar"
                    style={{
                        backgroundColor: screenWidth < 767 && toggleMenu ? isSignUpPopup || isSignInPopup ? null : "#1a1b22"
                            : null, height: isSignUpPopup || isSignInPopup ? `${48 + 19 + 0.5}px` : null,
                        borderBottom: "0.5px solid #ffffff"
                    }}>
                    {screenWidth < 767 && toggleMenu && isSignUpPopup || screenWidth < 767 && toggleMenu && isSignInPopup ? null : <>
                        <div className="header__logo">NewsExplorer</div>
                        <button className="header__menuBtn" onClick={() => setToggleMenu(!toggleMenu)}>
                            <img src={toggleMenu ? closeBtn : hamburgerWhite} alt={toggleMenu ? "Close Button" : "Hamburger Button"} />
                        </button>
                        {(screenWidth > 767 || toggleMenu) &&
                            <div className="header__navigation">
                                <Link
                                    to="/"
                                    className="header__home-button header__home-button_active"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Home
                                </Link>
                                {isLoggedIn ? <>
                                    <Link
                                        to="/saved-news"
                                        className="header__saved-articles"
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        Saved articles
                                    </Link>
                                    <button className="header__logout" onClick={() => {
                                        setLoggedIn(false)
                                        setCurrentUser({})
                                    }}>
                                        <div className="header__logout-text">{currentUser.name}</div>
                                        <div className="header__logout-icon" />
                                    </button>
                                </> : <button className="header__login-button" onClick={() => setIsSignInPopup(true)}>Sign in</button>}
                            </div>}
                    </>}
                </nav>
                :
                <nav className="header__navbar"
                    style={{
                        backgroundColor: screenWidth < 767 && toggleMenu ? "#1a1b22" : null,
                        borderBottom: "0.5px solid #777777"
                    }}
                >
                    <div className={`header__logo ${toggleMenu ? null : "header__logo-color_black"}`}>NewsExplorer</div>
                    <button className="header__menuBtn" onClick={() => setToggleMenu(!toggleMenu)}>
                        <img src={toggleMenu ? closeBtn : hamburgerBlack} alt={toggleMenu ? "Close Button" : "Hamburger Button"} />
                    </button>
                    {(screenWidth > 767 || toggleMenu) &&
                        <div className="header__navigation">
                            <Link
                                to="/"
                                className={`header__home-button ${toggleMenu ? null : "header__home-button-color_black"}`}
                                onClick={() => setToggleMenu(false)}
                            >
                                Home
                            </Link>
                            {isLoggedIn && <>
                                <Link
                                    to="/saved-news"
                                    className={`header__saved-articles ${toggleMenu ? "header__home-button_active" : "header__saved-articles_black"}`}
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Saved articles
                                </Link>
                                <button className={`header__logout ${toggleMenu ? null : "header__logout-black"}`}>
                                    <div className="header__logout-text">{currentUser.name}</div>
                                    <div className="header__logout-icon header__logout-icon_black" />
                                </button>
                            </>}
                        </div>}
                </nav>}
        </>)
}
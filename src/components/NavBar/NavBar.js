import React, { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useLocation, Link } from "react-router-dom";
import closeBtn from "../../images/Close_Icon.svg";
import hamburgerBlack from "../../images/hamburger_black.svg";
import hamburgerWhite from "../../images/hamburger.svg";

export default function NavBar({
  isLoggedIn,
  setIsSignInPopup,
  setLoggedIn,
  setCurrentUser,
  isSignUpPopup,
  isSignInPopup,
}) {
  const currentUser = useContext(CurrentUserContext);

  let location = useLocation();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleMenu, setToggleMenu] = useState(false);

  const screenToogleSignUp = screenWidth < 756 && toggleMenu && isSignUpPopup;
  const screenToogleSignIn = screenWidth < 756 && toggleMenu && isSignInPopup;

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", () => {
      changeWidth();
    });
  }, []);

  useEffect(() => {
    if (screenWidth > 756) {
      console.log(`bigger`);
      setToggleMenu(false);
    }
  }, [screenWidth]);

  return (
    <>
      {location.pathname === "/" ? (
        <nav
          className={`navbar ${
            screenWidth < 756 && toggleMenu
              ? isSignUpPopup || isSignInPopup
                ? null
                : "navbar_background_color"
              : null
          } ${isSignUpPopup || isSignInPopup ? "navbar__heigth " : null}`}
          style={
            {
              // backgroundColor:
              //     screenWidth < 756 && toggleMenu ?
              //         isSignUpPopup || isSignInPopup ?
              //             null : "#1a1b22"
              //         : null,
              // height: isSignUpPopup || isSignInPopup ? `${48 + 19 + 0.5}px` : null,
              // borderBottom: "0.5px solid #ffffff"
            }
          }
        >
          {screenToogleSignUp || screenToogleSignIn ? null : (
            <>
              <div className="navbar__logo">NewsExplorer</div>
              <button
                className="navbar__hamburger"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <img
                  src={toggleMenu ? closeBtn : hamburgerWhite}
                  alt={toggleMenu ? "Close Button" : "Hamburger Button"}
                />
              </button>
              {(screenWidth > 756 || toggleMenu) && (
                <div className="navbar__navigation">
                  <Link
                    to="/"
                    className="navbar__home-button navbar__home-button_active"
                    onClick={() => setToggleMenu(false)}
                  >
                    Home
                  </Link>
                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/saved-news"
                        className="navbar__saved-articles"
                        onClick={() => setToggleMenu(false)}
                      >
                        Saved articles
                      </Link>
                      <button
                        className="navbar__logout"
                        onClick={() => {
                          setLoggedIn(false);
                          setCurrentUser({});
                        }}
                      >
                        <div className="navbar__logout-text">
                          {currentUser.name}
                        </div>
                        <div className="navbar__logout-icon" />
                      </button>
                    </>
                  ) : (
                    <button
                      className="navbar__login-button"
                      onClick={() => setIsSignInPopup(true)}
                    >
                      Sign in
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </nav>
      ) : (
        <nav
          className={`navbar ${
            screenWidth < 756 && toggleMenu && "navbar_background_color"
          }`}
        >
          <div
            className={`navbar__logo ${
              toggleMenu ? null : "navbar__logo_color_black"
            }`}
          >
            NewsExplorer
          </div>
          <button
            className="navbar__hamburger"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img
              src={toggleMenu ? closeBtn : hamburgerBlack}
              alt={toggleMenu ? "Close Button" : "Hamburger Button"}
            />
          </button>
          {(screenWidth > 756 || toggleMenu) && (
            <div className="navbar__navigation">
              <Link
                to="/"
                className={`navbar__home-button ${
                  toggleMenu ? null : "navbar__home-button_color_black"
                }`}
                onClick={() => setToggleMenu(false)}
              >
                Home
              </Link>
              {isLoggedIn && (
                <>
                  <Link
                    to="/saved-news"
                    className={`navbar__saved-articles ${
                      toggleMenu
                        ? "navbar__home-button_active"
                        : "navbar__saved-articles_color_black"
                    }`}
                    onClick={() => setToggleMenu(false)}
                  >
                    Saved articles
                  </Link>
                  <button
                    className={`navbar__logout ${
                      toggleMenu ? null : "navbar__logout_color_black"
                    }`}
                  >
                    <div className="navbar__logout-text">
                      {currentUser.name}
                    </div>
                    <div className="navbar__logout-icon navbar__logout-icon_color_black" />
                  </button>
                </>
              )}
            </div>
          )}
        </nav>
      )}
    </>
  );
}

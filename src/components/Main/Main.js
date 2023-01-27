import React from "react"; // , { useState }
import About from "../About/About";
import NewsCardsList from "../NewsCardList/NewsCardList";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";

export default function Main({
  isLoggedIn,
  isSignInPopup,
  isSignUpPopup,
  setIsSignInPopup,
  setIsSignUpPopup,
  setLoggedIn,
  setCurrentUser,
  regUsers,
  setRegUsers,
}) {
  // const [isPopUpOpen, setisPopupOpen] = useState(false);
  // const [isSignInPopup, setIsSignInPopup] = useState(false);

  console.log(regUsers);
  return (
    <main className="main">
      {isSignUpPopup && (
        <SignUpPopup
          setIsSignInPopup={setIsSignInPopup}
          setIsSignUpPopup={setIsSignUpPopup}
          setRegUsers={setRegUsers}
          // setLoggedIn={setLoggedIn}
          // setCurrentUser={setCurrentUser}
          // isOpen={true}
        />
      )}
      {isSignInPopup && (
        <SignInPopup
          setIsSignInPopup={setIsSignInPopup}
          setIsSignUpPopup={setIsSignUpPopup}
          regUsers={regUsers}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
          // isOpen={true}
          // isOpen={isPopUpOpen}
        />
      )}
      {/* {isPopUpOpen && isSignInPopup ? <SignInPopup isOpen={isPopUpOpen} /> : <SignUpPopup />}
       */}
      <div className="main__container">
        <h2 className="main__header">Search results</h2>
        <div className="main__news-container">
          <NewsCardsList isLoggedIn={isLoggedIn} />

          <button type="button" className="main__button">
            Show more
          </button>
        </div>
      </div>
      <About />
    </main>
  );
}

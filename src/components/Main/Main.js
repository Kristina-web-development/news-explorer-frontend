import React
    // , { useState }
    from "react";
import About from "../About/About";
import NewsCardsList from "../NewsCardList/NewsCardList";
import SignInPopup from "../SignInPopup/SignInPopup"
import SignUpPopup from "../SignUpPopup/SignUpPopup"
import PopupConfirm from "../PopupConfirm/PopupConfirm";
import Preloader from '../Preloader/Preloader';
import NothingFound from "../NothingFound/NothingFound";

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
    errorText,
    signup,
    signin,
    articles,
    isConfirmPopup,
    setIsConfirmPopup,
    searchQuestion,
    isLoading,
    setKeywords,
    setSavedArticles,
    savedArticles,
}) {

    // console.log(setIsSignUpPopup)
    return (
        <main className='main'>
            {
                isSignUpPopup && <SignUpPopup
                    setIsSignInPopup={setIsSignInPopup}
                    setIsSignUpPopup={setIsSignUpPopup}
                    errorText={errorText}
                    signup={signup}
                    setRegUsers={setRegUsers}
                />
            }
            {
                isSignInPopup && <SignInPopup
                    setIsSignInPopup={setIsSignInPopup}
                    setIsSignUpPopup={setIsSignUpPopup}
                    regUsers={regUsers}
                    setLoggedIn={setLoggedIn}
                    setCurrentUser={setCurrentUser}
                    signin={signin}
                    errorText={errorText}
                />
            }
            <PopupConfirm
                name="confirm"
                setIsSignInPopup={setIsSignInPopup}
                setIsSignUpPopup={setIsSignUpPopup}
                isOpen={isConfirmPopup}
                setIsConfirmPopup={setIsConfirmPopup}
            />
            <div className='main__container'>
                {
                    articles.length > 0 ?
                        <>
                            <div className='main__news_container'>
                                {/* <h2 className='main__header'>Search results</h2> */}
                                {isLoading && searchQuestion && <Preloader />}
                                <NewsCardsList
                                    articles={articles}
                                    isLoggedIn={isLoggedIn}
                                    searchQuestion={searchQuestion}
                                    isLoading={isLoading}
                                    savedArticles={savedArticles}
                                    setSavedArticles={setSavedArticles}
                                    setIsSignUpPopup={setIsSignUpPopup}
                                    setKeywords={setKeywords}
                                />
                            </div>
                        </> :
                        (
                            !isLoading && searchQuestion ? <NothingFound
                                articles={articles}
                                searchQuestion={searchQuestion}
                                isLoading={isLoading}
                            /> : isLoading && searchQuestion ? <Preloader /> : null
                        )
                }
            </div>
            <About />
        </main>
    )
}
import React, { useEffect, useState } from "react";
//import ProtectedRoute from '../Protected/ProtectedRoute';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import CurrentUserContext from "../../context/CurrentUserContext";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
//import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import * as auth from "../../utils/auth";

export default function App() {
    const [isSignUpPopup, setIsSignUpPopup] = useState(false);
    const [isSignInPopup, setIsSignInPopup] = useState(false);
    const [isConfirmPopup, setIsConfirmPopup] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    const [errorText, setErrorText] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('jwt'));
    const [regUsers, setRegUsers] = useState([])
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuestion, setSearchQuestion] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [savedArticles, setSavedArticles] = useState([]);
    const navigate = useNavigate();
    // // const [isPopUpOpen, setisPopupOpen] = useState(false);
    // const [isSignUpPopup, setIsSignUpPopup] = useState(false);
    // const [isSignInPopup, setIsSignInPopup] = useState(false);
    // const [isLoggedIn, setLoggedIn] = useState(false);
    // const [currentUser, setCurrentUser] = useState({})
    // // console.log(currentUser)

    // // const [regUsers, setRegUsers] = useState([])

    function signup({ name, email, password }) {
        auth
            .register(email, password, name)
            .then(() => {
                setIsSignUpPopup(false);
                setIsConfirmPopup(true);
            })
            .catch((err) => {
                console.log(err);
                setErrorText(true);
                setTimeout(() => {
                    setErrorText(false);
                }, 3000);
            })
    }


    function signin({ email, password }) {
        auth
            .authorize(password, email)
            .then((res) => {
                setLoggedIn(true);
                localStorage.setItem('jwt', res.access_token);
                setToken(res.access_token)
                setCurrentUser(res.user);
                setIsSignInPopup(false);
            })
            .catch((err) => {
                console.log(err);
                setErrorText(true);
                setTimeout(() => {
                    setErrorText(false);
                }, 3000);
            })
    }

    useEffect(() => {
        if (token) {
            auth
                .validateToken(token)
                .then((res) => {
                    if (res.user._id) {
                        setLoggedIn(true);
                        setCurrentUser(res.user);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setLoggedIn(false);
                });
        }
    }, [token, setLoggedIn]);

    function logout() {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        setCurrentUser({});
        setIsSignUpPopup(false);
        navigate('/');
    }

    return (
        <div className='page'>
            <CurrentUserContext.Provider value={currentUser}>
                <Header
                    isLoggedIn={isLoggedIn}
                    setIsSignInPopup={setIsSignInPopup}
                    currentUser={currentUser}
                    setLoggedIn={setLoggedIn}
                    setCurrentUser={setCurrentUser}
                    isSignUpPopup={isSignUpPopup}
                    isSignInPopup={isSignInPopup}
                    logout={logout}
                    setArticles={setArticles}
                    setIsLoading={setIsLoading}
                    setSearchQuestion={setSearchQuestion}
                    keywords={keywords}
                    articles={savedArticles}
                // isLoggedIn={isLoggedIn}
                // setIsSignInPopup={setIsSignInPopup}
                // currentUser={currentUser}
                // setLoggedIn={setLoggedIn}
                // setCurrentUser={setCurrentUser}
                // isSignUpPopup={isSignUpPopup}
                // isSignInPopup={isSignInPopup}
                />
                <Routes>
                    <Route exact path='/' element={
                        <Main
                            isLoggedIn={isLoggedIn}
                            isSignInPopup={isSignInPopup}
                            isSignUpPopup={isSignUpPopup}
                            setIsSignInPopup={setIsSignInPopup}
                            setIsSignUpPopup={setIsSignUpPopup}
                            setLoggedIn={setLoggedIn}
                            setCurrentUser={setCurrentUser}
                            regUsers={regUsers}
                            setRegUsers={setRegUsers}
                            errorText={errorText}
                            signup={signup}
                            signin={signin}
                            articles={articles}
                            isConfirmPopup={isConfirmPopup}
                            setIsConfirmPopup={setIsConfirmPopup}
                            isLoading={isLoading}
                            searchQuestion={searchQuestion}
                            setSavedArticles={setSavedArticles}
                            setKeywords={setKeywords}
                            savedArticles={savedArticles}
                        // isSignInPopup={isSignInPopup}
                        // isSignUpPopup={isSignUpPopup}
                        // setIsSignInPopup={setIsSignInPopup}
                        // setIsSignUpPopup={setIsSignUpPopup}
                        // setLoggedIn={setLoggedIn}
                        // // setCurrentUser={setCurrentUser}
                        // // regUsers={regUsers}
                        // // setRegUsers={setRegUsers}
                        // signup={signup}
                        // signin={signin}
                        />} />
                    <Route path='saved-news' element={
                        <SavedNews
                            isLoggedIn={isLoggedIn}
                            setKeywords={setKeywords}
                            setSavedArticles={setSavedArticles}
                            savedArticles={savedArticles}
                        />} />
                </Routes>
                <Footer />
            </CurrentUserContext.Provider>
        </div>
    )
}
import React, { useState } from "react";
//import ProtectedRoute from '../Protected/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import CurrentUserContext from "../../context/CurrentUserContext";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
//import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";


export default function App() {
    // const [isPopUpOpen, setisPopupOpen] = useState(false);
    const [isSignUpPopup, setIsSignUpPopup] = useState(false);
    const [isSignInPopup, setIsSignInPopup] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    console.log(currentUser)

    const [regUsers, setRegUsers] = useState([])

    return (
        <div className="App">
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
                    />
                    <Routes>
                        <Route exact path='/' element={
                            <Main isLoggedIn={isLoggedIn}
                                isSignInPopup={isSignInPopup}
                                isSignUpPopup={isSignUpPopup}
                                setIsSignInPopup={setIsSignInPopup}
                                setIsSignUpPopup={setIsSignUpPopup}
                                setLoggedIn={setLoggedIn}
                                setCurrentUser={setCurrentUser}
                                regUsers={regUsers}
                                setRegUsers={setRegUsers}
                            />} />
                        <Route path='saved-news' element={<SavedNews isLoggedIn={isLoggedIn} />} />
                    </Routes>
                    <Footer />
                </CurrentUserContext.Provider>
            </div>
        </div>
    )
}
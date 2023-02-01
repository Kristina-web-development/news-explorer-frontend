// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';

export default function ProtectedRoute({ setIsSignUpPopup, isLogin, children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        if (!isLogin && location.pathname === '/saved-news') {
            navigate('/');
            setIsSignUpPopup(true);
        }
        if (localStorage.getItem('jwt')) {
            setIsSignUpPopup(false);
            navigate('/saved-news');
        }
    }, [isLogin, location.pathname, navigate, setIsSignUpPopup, currentUser]);

    return isLogin && children;
}
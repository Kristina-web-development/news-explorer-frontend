import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';



export default function NewsCardsList({ isLoggedIn, isSavedCategory = false }) {
    let location = useLocation();

    return (
        <section className={` ${location.pathname === "/" ? "card-list" : "card-list__backgroundcolor_grey"}`}>
            <ul className={`card-list__list ${location.pathname !== "/" && "card-list__list_savedarticles"}`}>
                <NewsCard isLoggedIn={isLoggedIn} />
                <NewsCard isLoggedIn={isLoggedIn} />
                <NewsCard isLoggedIn={isLoggedIn} />
            </ul>
        </section >
    )
}
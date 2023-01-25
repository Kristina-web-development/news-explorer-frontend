import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';



export default function NewsCardsList({ isLoggedIn, isSavedCategory = false }) {
    let location = useLocation();

    return (
        <section className={` ${location.pathname == "/" ? "newsCards" : "newsCards__backgroundColor_grey"}`}>
            <ul className={`newsCards__list ${location.pathname !== "/" && "newsCards__list_savedArticles"}`}>
                <NewsCard isLoggedIn={isLoggedIn} />
                <NewsCard isLoggedIn={isLoggedIn} />
                <NewsCard isLoggedIn={isLoggedIn} />
            </ul>
        </section >
    )
}
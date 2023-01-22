import React
    // , { useState } 
    from 'react';
import NewsCard from '../NewsCard/NewsCard';



export default function NewsCardsList({ isLoggedIn, isSavedCategory = false }) {

    // const [isSavedArticles, setIsSavedArticles] = useState(isSavedCategory)

    return (
        <section className='newsCards'>
            <ul className='newsCards__list'>
                <NewsCard isLoggedIn={isLoggedIn} />
                <NewsCard isLoggedIn={isLoggedIn} />
                <NewsCard isLoggedIn={isLoggedIn} />
            </ul>
        </section>
    )
}
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';



export default function NewsCardsList({
    isLoggedIn,
    articles,
    searchQuestion,
    setSavedArticles,
    setKeywords,
    isLoading,
    savedArticles,
    setIsSignUpPopup,
    isSavedCategory = false
    // isLoggedIn, isSavedCategory = false 
}) {
    let location = useLocation();

    const [articlesAmount, setArticlesAmount] = useState(3);

    return (
        location.pathname === '/' ? <>
            {
                articles.length > 0 && searchQuestion && !isLoading ?
                    <>
                        <h2 className='main__header'>Search results</h2>
                        <section className={` ${location.pathname === "/" ? "card-list" : "card-list__backgroundcolor_grey"}`}>
                            <ul className={`card-list__list ${location.pathname !== "/" && "card-list__list_savedarticles"}`}>
                                {articles.slice(0, articlesAmount).map((art, index) => (
                                    <NewsCard
                                        key={index}
                                        isLoggedIn={isLoggedIn}
                                        article={art}
                                        searchQuestion={searchQuestion}
                                        setSavedArticles={setSavedArticles}
                                        setKeywords={setKeywords}
                                        savedArticles={savedArticles}
                                        setIsSignUpPopup={setIsSignUpPopup}
                                    />
                                ))}

                                {/* <NewsCard isLoggedIn={isLoggedIn} />
                                <NewsCard isLoggedIn={isLoggedIn} />
                            <NewsCard isLoggedIn={isLoggedIn} /> */}
                            </ul>
                        </section >
                        <button type='button' className="main__button"
                            style={{
                                display: articlesAmount >= articles.length ? 'none' : 'block',
                            }}
                            onClick={() => setArticlesAmount(articlesAmount + 3)}>Show more</button>
                    </> :
                    null
            }
        </> : <>
            <section className={` ${location.pathname === "/" ? "card-list" : "card-list__backgroundcolor_grey"}`}>
                <ul className={`card-list__list ${location.pathname !== "/" && "card-list__list_savedarticles"}`}>
                    {articles.map((art, index) => (
                        <NewsCard
                            key={index}
                            isLoggedIn={isLoggedIn}
                            article={art}
                            searchQuestion={searchQuestion}
                            setSavedArticles={setSavedArticles}
                            setKeywords={setKeywords}
                            savedArticles={savedArticles}
                        />
                    ))}

                    {/* <NewsCard isLoggedIn={isLoggedIn} />
                                <NewsCard isLoggedIn={isLoggedIn} />
                            <NewsCard isLoggedIn={isLoggedIn} /> */}
                </ul>
            </section >
        </>
    )
}
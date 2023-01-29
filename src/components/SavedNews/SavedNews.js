import React, { useEffect } from "react";
import NewsCardsList from "../NewsCardList/NewsCardList";
import { getArticles } from "../../utils/auth";

export default function SavedNews({
    isLoggedIn,
    setKeywords,
    setSavedArticles,
    savedArticles
}) {

    useEffect(() => {
        if (isLoggedIn) {
            const token = localStorage.getItem('jwt');
            getArticles(token).then((res) => {
                setSavedArticles(res.data);
                const words = res.data.map((i) => i.keyword);
                setKeywords([...new Set(words)]);
            });
        }
    }, [setKeywords, setSavedArticles, isLoggedIn]);

    return (
        <div className="saved__news">
            <NewsCardsList
                articles={savedArticles}
                isLoggedIn={isLoggedIn}
                setSavedArticles={setSavedArticles}
                setKeywords={setKeywords}
            // isLoggedIn={isLoggedIn} 
            />
        </div>
    )
}
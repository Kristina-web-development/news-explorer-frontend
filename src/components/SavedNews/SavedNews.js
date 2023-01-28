import React from "react";
import NewsCardsList from "../NewsCardList/NewsCardList";

export default function SavedNews({ isLoggedIn }) {

    return (
        <div className="saved__news">
            <NewsCardsList isLoggedIn={isLoggedIn} />
        </div>
    )
}
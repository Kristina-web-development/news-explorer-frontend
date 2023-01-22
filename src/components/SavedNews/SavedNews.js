import React from "react";
import NewsCardsList from "../NewsCardList/NewsCardList";

export default function SavedNews({isLoggedIn}) {

    return(
        <div className="Saved__news">
            <NewsCardsList isLoggedIn={isLoggedIn}/>
        </div>
    )
}
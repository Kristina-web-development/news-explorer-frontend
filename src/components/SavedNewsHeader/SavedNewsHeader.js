import React, { useContext } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';

export default function SavedNewsHeader({ keywords, articles }) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <header className='news__container__header'>
            <div className='news__container__text_container'>
                <p className='news__container__subtitle'>Saved articles</p>
                <h1 className='news__container__title'>{currentUser.name}, you have {articles.length} saved articles</h1>
                <p className='news__container__keywords'>By keywords:
                    {keywords.length > 3 ? (
                        <>
                            <span>{keywords[0]}, {keywords[1]}, {keywords[2]} and{" "}
                                {keywords.length - 3} others</span>
                        </>
                    ) : (
                        <span>{keywords.join(', ')}</span>
                    )}
                    {/* <span>Nature, Yellowstone, and 2 other</span> */}
                </p>
            </div>
        </header>

    )
}
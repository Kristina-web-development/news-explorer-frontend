import React from 'react';

export default function SavedNewsHeader() {
    return (
        <header className='news__container__header'>
            <div className='news__container__text_container'>
                <p className='news__container__subtitle'>Saved articles</p>
                <h1 className='news__container__title'>Kris, you have 5 saved articles</h1>
                <p className='news__container__keywords'>By keywords: <span>Nature, Yellowstone, and 2 other</span></p>
            </div>
        </header>

    )
}
import React from 'react';
// import NavBar from '../NavBar/NavBar';

export default function SavedNewsHeader({ isLoggedIn }) {
    return (

        <header className='savedNews__header'>
            {/* <NavBar isLoggedIn={isLoggedIn} /> */}
            <div className='savedNews__text_container'>
                <p className='savedNews__subtitle'>Saved articles</p>
                <h1 className='savedNews__title'>Kris, you have 5 saved articles</h1>
                <p className='savedNews__keywords'>By keywords: <span>Nature, Yellowstone, and 2 other</span></p>
            </div>
        </header>

    )
}
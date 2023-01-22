import React from 'react';
import { useLocation } from 'react-router-dom';
// import CurrentUserContext from '../../context/CurrentUserContext';

export default function NewsCard({ isLoggedIn }) {

    let location = useLocation();

    return (
        <>
            {!isLoggedIn ? (
                <li className='newsCard'>
                    <div className='newsCard__image'></div>
                    <div className='newsCard__flag'></div>
                    <div className='newsCard__tip'>Sign in to save articles</div>


                    {/* <div className={`${iconClass} ${bookmarkActiceClass}`} onClick={handleIconClick}></div> */}


                    <div className='newsCard__textcontainer'>
                        <p className='newsCard__date'>October 19, 2020</p>
                        <h3 className='newsCard__title'>Grand Teton Renews Historic Crest Trail</h3>
                        <p className='newsCard__text'>“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...</p>
                        <p className='newsCard__source'>National parks traveler</p>
                    </div>
                </li>


            ) : (

                <li className='newsCard'>
                    <div className='newsCard__image'></div>
                    {/* <div className='newsCard__trash'></div> */}
                    {location.pathname === "/" ? <div className='newsCard__flag'></div> : <div className='newsCard__trash'></div>}
                    {location.pathname === "/" ? null :
                        <>
                            <div className='newsCard__tip'>Remove from saved</div>
                            <div className='newsCard__note'>Nature</div>
                        </>
                    }

                    {/* <div className={`${iconClass} ${bookmarkActiceClass}`} onClick={handleIconClick}></div> */}


                    <div className='newsCard__textcontainer'>
                        <p className='newsCard__date'>October 19, 2020</p>
                        <h3 className='newsCard__title'>Grand Teton Renews Historic Crest Trail</h3>
                        <p className='newsCard__text'>“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...</p>
                        <p className='newsCard__source'>National parks traveler</p>
                    </div>
                </li>

            )}
        </>

    )
}
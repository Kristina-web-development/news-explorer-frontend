import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import marked from '../../images/bookmark-active.svg'
import hoverMark from '../../images/bookmark-black.svg'
import regularMark from '../../images/bookmark-noraml.svg'
import { deleteSavedArticles, saveArticles } from '../../utils/auth';
import bin from '../../images/trash-normal.svg'
import activeBin from '../../images/trash-active.svg'

export default function NewsCard({
    isLoggedIn,
    article,
    searchQuestion,
    setSavedArticles,
    setKeywords,
    savedArticles,
    setIsSignUpPopup
}) {
    const [hovered, setHovered] = useState(false)
    const [isSave, setIsSave] = useState(false);

    let location = useLocation();

    function registerClick() {
        setIsSignUpPopup(true);
    }

    function getCardId() {
        const savedCard = savedArticles.find(
            (item) => item.title === article.title
        );
        return savedCard;
    }

    useEffect(() => {
        savedArticles &&
            savedArticles.some((item) => item.title === article.title) &&
            setIsSave(true);
    }, [savedArticles, article.title]);

    // useEffect(() => {
    //     if (location.pathname === "/") {
    //         if (isLoggedIn) {
    //             savedArticles.forEach((el) => {
    //                 // eslint-disable-next-line
    //                 if (el.title == article.title) {
    //                     setIsSave(true)
    //                 }
    //             })
    //         }
    //     }
    //     // eslint-disable-next-line
    // }, [isLoggedIn, savedArticles, article.title])

    useEffect(() => {
        const toDate = (date) => {
            return new Intl.DateTimeFormat('en-EN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            }).format(new Date(date));
        };

        const date = document.querySelectorAll('.element__date');

        date.forEach((i) => {
            i.textContent = toDate(i.textContent);
        });
    }, [article]);

    function saveArticlesFromClient() {
        const token = localStorage.getItem('jwt');
        saveArticles({
            fromDate: article.publishedAt,
            question: searchQuestion,
            token,
        }).then((res) => {
            setSavedArticles(res);
        });
    }

    function deleteCard(article) {
        const token = localStorage.getItem('jwt');
        deleteSavedArticles(token, article._id).then((res) => {
            setSavedArticles(res.data);
            const words = res.data.map((i) => i.keyword);
            setKeywords([...new Set(words)]);
        });
    }

    function handleDeleteClick(e) {
        e.stopPropagation();
        if (isLoggedIn && location.pathname === '/') {
            if (isSave) {
                const article = getCardId();
                deleteCard(article);
                setIsSave((isSave) => !isSave);
            } else {
                saveArticlesFromClient();
                setIsSave((isSave) => !isSave);
            }
        }
    }

    // useEffect(() => {
    //     savedArticles &&
    //         savedArticles.some((item) => item.title === article.title) &&
    //         setIsSave(true);
    // }, [savedArticles, article.title, isLoggedIn]);


    // useEffect(() => {
    //     savedArticles &&
    //         savedArticles.some((item) => item.title === article.title) &&
    //         setIsSave(true);
    // }, [savedArticles, article.title]);
    // useEffect(() => {
    //     // if (location.pathname === "/") {
    //     savedArticles &&
    //         savedArticles.some((item) => item.title === article.title) &&
    //         setIsSave(true);
    //     // if (isLoggedIn) {
    //     //     savedArticles.forEach((el) => {
    //     //         if (el.title === article.title) {
    //     //             setIsSave(true)
    //     //         }
    //     //     })
    //     // }
    //     // }
    //     // eslint-disable-next-line
    // }, [savedArticles, article.title])

    // console.log(isLoggedIn)

    // useEffect(() => {
    //     if (location.pathname === "/") {
    //         if (isLoggedIn) {
    //             savedArticles.forEach((el) => {
    //                 // eslint-disable-next-line
    //                 if (el.title == article.title) {
    //                     setIsSave(true)
    //                 }
    //             })
    //         }
    //     }
    //     // eslint-disable-next-line
    // }, [isLoggedIn, savedArticles, article.title])

    return (
        <>
            {isLoggedIn ? (
                <li className='element'>
                    <img src={article.urlToImage}
                        alt={article.title} className='element__image' />
                    {/* <div className='element__image'>

                    </div> */}
                    <div className='element__flag'
                        style={{
                            backgroundImage:
                                location.pathname === "/" ? isSave ? `url(${marked})` :
                                    hovered ? `url(${hoverMark})` : `url(${regularMark})` :
                                    hovered ? `url(${activeBin})` : `url(${bin})`

                        }}
                        // style={{
                        //     backgroundImage: isSave ? `url(${marked})` :
                        //         hovered ? `url(${hoverMark})` : `url(${regularMark})`
                        // }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={location.pathname === "/" ? handleDeleteClick : deleteCard}
                    // onClick={() => setIsSave(!isSave)}
                    ></div>
                    {location.pathname === "/" ? null :
                        <>
                            <div className='element__tip'>Remove from saved</div>
                            <div className='element__note'>{article.keyword}</div>
                        </>
                    }
                    {/* <div className='element__tip'>Sign in to save articles</div> */}


                    {/* <div className={`${iconClass} ${bookmarkActiceClass}`} onClick={handleIconClick}></div> */}


                    <div className='element__textcontainer'>
                        <p className='element__date'>{article.publishedAt}</p>
                        <h3 className='element__title' dangerouslySetInnerHTML={{ __html: article.title }}></h3>
                        <p className='element__text' dangerouslySetInnerHTML={{ __html: article.description }}></p>
                        <p className='element__source'><a href={article.url}>{article.source.name}</a></p>
                    </div>
                </li>


            ) : (

                <li className='element'>
                    <img src={article.urlToImage}
                        alt={article.title} className='element__image' />
                    {/* <div className='element__image'></div> */}
                    {/* <div className='element__trash'></div> */}
                    {location.pathname === "/" ? <div className='element__flag'
                        style={{
                            backgroundImage: isSave ? `url(${marked})` :
                                hovered ? `url(${hoverMark})` : `url(${regularMark})`
                        }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={registerClick}
                    // onClick={() => setIsSave(!isSave)}
                    ></div> : <div className='element__trash'></div>}
                    <div className='element__tip'>Sign in to save articles</div>
                    {/* {location.pathname === "/" ? null :
                        <>
                            <div className='element__tip'>Remove from saved</div>
                            <div className='element__note'>Nature</div>
                        </>
                    } */}

                    {/* <div className={`${iconClass} ${bookmarkActiceClass}`} onClick={handleIconClick}></div> */}


                    <div className='element__textcontainer'>
                        <p className='element__date'>{article.publishedAt}</p>
                        <h3 className='element__title' dangerouslySetInnerHTML={{ __html: article.title }}></h3>
                        <p className='element__text' dangerouslySetInnerHTML={{ __html: article.description }}></p>
                        <p className='element__source'><a href={article.url}>{article.source.name}</a></p>
                    </div>
                </li>

            )}
        </>

    )
}
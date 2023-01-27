import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import marked from "../../images/bookmark-active.svg";
import hoverMark from "../../images/bookmark-black.svg";
import regularMark from "../../images/bookmark-noraml.svg";
// import CurrentUserContext from '../../context/CurrentUserContext';

export default function NewsCard({ isLoggedIn }) {
  const [hovered, setHovered] = useState(false);
  const [isSave, setIsSave] = useState(false);

  let location = useLocation();

  return (
    <>
      {!isLoggedIn ? (
        <li className="element">
          <div className="element__image"></div>
          <div
            className="element__flag"
            style={{
              backgroundImage: isSave
                ? `url(${marked})`
                : hovered
                ? `url(${hoverMark})`
                : `url(${regularMark})`,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setIsSave(!isSave)}
          ></div>
          <div className="element__tip">Sign in to save articles</div>

          {/* <div className={`${iconClass} ${bookmarkActiceClass}`} onClick={handleIconClick}></div> */}

          <div className="element__textcontainer">
            <p className="element__date">October 19, 2020</p>
            <h3 className="element__title">
              Grand Teton Renews Historic Crest Trail
            </h3>
            <p className="element__text">
              “The linking together of the Cascade and Death Canyon trails, at
              their heads, took place on October 1, 1933, and marked the first
              step in the realization of a plan whereby the hiker will be...
            </p>
            <p className="element__source">National parks traveler</p>
          </div>
        </li>
      ) : (
        <li className="element">
          <div className="element__image"></div>
          {/* <div className='element__trash'></div> */}
          {location.pathname === "/" ? (
            <div
              className="element__flag"
              style={{
                backgroundImage: isSave
                  ? `url(${marked})`
                  : hovered
                  ? `url(${hoverMark})`
                  : `url(${regularMark})`,
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => setIsSave(!isSave)}
            ></div>
          ) : (
            <div className="element__trash"></div>
          )}
          {location.pathname === "/" ? null : (
            <>
              <div className="element__tip">Remove from saved</div>
              <div className="element__note">Nature</div>
            </>
          )}

          {/* <div className={`${iconClass} ${bookmarkActiceClass}`} onClick={handleIconClick}></div> */}

          <div className="element__textcontainer">
            <p className="element__date">October 19, 2020</p>
            <h3 className="element__title">
              Grand Teton Renews Historic Crest Trail
            </h3>
            <p className="element__text">
              “The linking together of the Cascade and Death Canyon trails, at
              their heads, took place on October 1, 1933, and marked the first
              step in the realization of a plan whereby the hiker will be...
            </p>
            <p className="element__source">National parks traveler</p>
          </div>
        </li>
      )}
    </>
  );
}

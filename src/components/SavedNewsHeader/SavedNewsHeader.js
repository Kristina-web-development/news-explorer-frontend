import React from "react";

export default function SavedNewsHeader() {
  return (
    <header className="news__header">
      <div className="news__container-text">
        <p className="news__container-subtitle">Saved articles</p>
        <h1 className="news__container-title">
          Kris, you have 5 saved articles
        </h1>
        <p className="news__container-keywords">
          By keywords: <span>Nature, Yellowstone, and 2 other</span>
        </p>
      </div>
    </header>
  );
}

import React from "react";

export default function SearchForm() {

    return (
        <form className="header-search-form" name="header-search-form">
            <fieldset className="header-search-form__fieldset">
                <input type="text" className="header-search-form__input " id="text" name="text" placeholder="Yellowstone" required
                // value=""
                ></input>
                <button type="submit" className="header-search-form__button">Search</button>
            </fieldset>
        </form>
    )
}
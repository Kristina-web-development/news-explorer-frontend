import React from "react";

export default function SearchForm() {

    return (
        <form className="header__search_form" name="header__search_form">
            <fieldset className="header__search_form_fieldset">
                <input type="text" className="header__search_form_input " id="text" name="text" placeholder="Yellowstone" required
                // value=""
                ></input>
                <button type="submit" className="header__search_form_button">Search</button>
            </fieldset>
        </form>
    )
}
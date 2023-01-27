import React from "react";

export default function SearchForm() {
  return (
    <form className="search-form" name="search-form">
      <fieldset className="search-form__fieldset">
        <input
          type="text"
          className="search-form__input "
          id="text"
          name="text"
          placeholder="Enter topic"
          required
          // value=""
        ></input>
        <button type="submit" className="search-form__button">
          Search
        </button>
      </fieldset>
    </form>
  );
}

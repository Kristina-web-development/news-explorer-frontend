import React, { useState } from "react";
import { searchArticles } from "../../utils/NewsApi";

export default function SearchForm({
    setArticles,
    setIsLoading,
    setSearchQuestion
}) {
    const [value, setValue] = useState({ question: "" })

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValue({ ...value, [name]: value });
    };

    function handleSearch(e) {
        e.preventDefault();

        searchArticles(value.question)
            .then((res) => {
                console.log(res.articles)
                setIsLoading(true);
                setArticles(res.articles);
                setSearchQuestion(value.question)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            })
    }

    return (
        <form className="header__search_form" name="header__search_form"
            onSubmit={handleSearch}>
            <fieldset className="header__search_form_fieldset">
                <input type="text" className="header__search_form_input " id="text" name="question" placeholder="Yellowstone" required
                    // value=""
                    onChange={handleChange} />
                <button type="submit" className="header__search_form_button">Search</button>
            </fieldset>
        </form>
    )
}
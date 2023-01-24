import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer className="footer">
            <p className="footer__copyright">@2022, Kristina S. News API</p>
            <ul className="footer__links">
                <li className="footer__links_featured">
                    <Link to='/' className="footer__links_link">Home</Link>
                    <a href="https://practicum.yandex.com/" className="footer__links_link" rel="noopener noreferrer" target="_blank">Practicum</a>
                </li>
                <li className="footer__links_social">
                    <a href="https://github.com/Kristina-web-development" target="_blank" rel="noopener noreferrer" className="footer__link_social github"></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer__link_social facebook"></a>
                </li>
            </ul>
        </footer>
    )
}
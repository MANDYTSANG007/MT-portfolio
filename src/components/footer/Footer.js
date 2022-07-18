import React from "react";
import "./footer.css";
import {GoMarkGithub} from "react-icons/go";
import {AiOutlineContacts} from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <a href="/" className="footer__logo">Mandy Tsang</a>

            <div className="footer__socials">
                <a href="https://github.com"><GoMarkGithub /></a>
                <a href="/contact"><AiOutlineContacts /></a>
            </div>
            <div className="footer__copyright">
                <p>&copy;2022 MANDY TSANG - All Rights Reserved </p>
            </div>
        </footer>
    )
}

export default Footer;
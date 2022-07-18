import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./nav.css";

const Nav = () => {
    return (
        <nav className="nav">  
            <Link to="/" className="navEl">Mandy Tsang</Link>
            <ul>
                <CustomLink className="navEl" to="/"> Home </CustomLink>
                <CustomLink className="navEl" to="/portfolio"> Portfolio </CustomLink>
                <CustomLink className="navEl" to="/contact"> Contact </CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={ isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Nav;
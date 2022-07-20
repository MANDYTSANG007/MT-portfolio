import React from "react";
import mandy from "../../assets/utahHorseRiding.jpg";
import react from "../../assets/icon/i-react.png";
import css from "../../assets/icon/i-css.png";
import bootstrap from "../../assets/icon/i-bootstrap.png";
import html from "../../assets/icon/i-html.png";
import express from "../../assets/icon/i-Express.png";
import jquery from "../../assets/icon/i-jQuery.png";
import mysql from "../../assets/icon/i-MySQL.png";
import handlebars from "../../assets/icon/i-handlebars.png";
import mongodb from "../../assets/icon/i-MongoDB.png";
import mui from "../../assets/icon/i-mui.png";
import node from "../../assets/icon/i-NodeJS.png";
import github from "../../assets/icon/i-GitHub.png";

import "./header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="mandy">
                    <img src={mandy} alt="mandy was doing horse riding" />
                </div>
                <div className="header__content">
                    <h1 className="name">Mandy Tsang</h1>
                    <div className="header__skills">
                        <h3> Hi! </h3>
                        <h4>Hello and welcome to my website! I hope you'll take some time to look around and 
                            enjoy the projects that I've been working on. Thanks for stopping by.
                        </h4>
                        
                        <br></br>
                        <br></br>
                        <hr className="dividers"></hr>
                        <br></br>

                        <h3> Here are the tools that I've used for my projects: </h3>
                        <div className="grid__container">
                            <img className="header__icon" src={react} alt="icon"></img>
                            <img className="header__icon" src={css} alt="icon"></img>
                            <img className="header__icon" src={html} alt="icon"></img>
                            <img className="header__icon" src={mongodb} alt="icon"></img>
                            <img className="header__icon" src={jquery} alt="icon"></img>
                            <img className="header__icon" src={bootstrap} alt="icon"></img>
                            <img className="header__icon" src={node} alt="icon"></img>
                            <img className="header__icon" src={mui} alt="icon"></img>
                            <img className="header__icon" src={handlebars} alt="icon"></img>
                            <img className="header__icon" src={express} alt="icon"></img>
                            <img className="header__icon" src={mysql} alt="icon"></img>
                            <img className="header__icon" src={github} alt="icon"></img>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
import React from "react";
import "./header.css";

import mandy from "../../assets/utahHorseRiding.jpg";
import react from "../../assets/icon/i-react.png";
import css from "../../assets/icon/i-css.png";
import bootstrap from "../../assets/icon/i-bootstrap1.png";
import html from "../../assets/icon/i-html.png";
import express from "../../assets/icon/i-Express.png";
import jquery from "../../assets/icon/i-jQuery.png";
import mysql from "../../assets/icon/i-mysql2.png";
import handlebars from "../../assets/icon/i-handlebars2.png";
import mongodb from "../../assets/icon/i-mongodb1.png";
import js from "../../assets/icon/i-js1.png";
import node from "../../assets/icon/i-nodejs8.png";
import github from "../../assets/icon/i-GitHub1.png";

const Header = () => {
    return (
        <header className="header">
            <div>
                <div className="mandy">
                    <img src={mandy} alt="Mandy was doing horse riding" />
                </div>
                <h1 className="name">Mandy Tsang</h1>
                <div className="header__message">
                    <br></br>
                    <div className="message">
                        <h3 className="message__title"> Greetings! </h3>
                        <h4>Hello and welcome to my website! I hope you'll take some time to look around and
                            enjoy the projects that I've been working on. Thanks for stopping by.
                        </h4>
                    </div>

                    <hr className="dividers"></hr>

                    <div className="message">
                        <h3 className="message__title">About Me</h3>
                        <h4> I am a full stack developer who loves to build things with my computer. I am also 
                            a lifelong learner, reader, toastmaster, and Lego fan. 
                            <br></br>
                            <br></br>
                            After graduating from UCLA with a bachelor's degree, I've had the privilege of working in 
                            the highly-regulated financial industry. In 2020, I was invited to attend CES 2020 in Las Vegas 
                            where I was introduced to many innovative, life-changing, ground-breaking technologies that solve 
                            some of the biggest problems in the world. The invaluable experience has deepened my 
                            passion in computer programming.
                            <br></br>
                            <br></br>
                            Recently, I have been furthering my education in application development at UC Berkeley.
                            My main focus these days is building accessible and user-friendly products. Check out some
                            of my recent works in my portfolio page and feel free to reach out.
                        </h4>
                    </div>

                    <hr className="dividers"></hr>

                    <div className="message">
                        <h3 className="message__title">Technologies</h3>
                        <h4> I've always eager to learn more in new technologies.
                            Here are some technologies I've worked with: </h4>
                    </div>
                    <div className="grid__container">
                        <img className="header__icon" src={react} alt="icon"></img>
                        <img className="header__icon" src={css} alt="icon"></img>
                        <img className="header__icon" src={html} alt="icon"></img>
                        <img className="header__icon" src={mongodb} alt="icon"></img>
                        <img className="header__icon" src={jquery} alt="icon"></img>
                        <img className="header__icon" src={bootstrap} alt="icon"></img>
                        <img className="header__icon" src={node} alt="icon"></img>
                        <img className="header__icon" src={js} alt="icon"></img>
                        <img className="header__icon" src={handlebars} alt="icon"></img>
                        <img className="header__icon" src={express} alt="icon"></img>
                        <img className="header__icon" src={mysql} alt="icon"></img>
                        <img className="header__icon" src={github} alt="icon"></img>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
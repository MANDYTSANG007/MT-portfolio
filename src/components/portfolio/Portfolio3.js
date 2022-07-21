import React, { useEffect } from "react";
import "./portfolio3.css";
import Aos from "aos";
import "aos/dist/aos.css";
import project1 from '../../assets/project/megame.png';
import project2 from '../../assets/project/perfect-cup.png';
import project3 from '../../assets/project/techTalk.png';
import project4 from '../../assets/project/work-day-scheduler.png';
import jquery from "../../assets/icon/i-jQuery.png";
import bootstrap from "../../assets/icon/i-bootstrap1.png";
import react from "../../assets/icon/i-react.png";
import js from "../../assets/icon/i-js.png";
import express from "../../assets/icon/i-Express.png";
import mysql from "../../assets/icon/i-mysql2.png";
import node from "../../assets/icon/i-nodejs8.png";
import handlebars from "../../assets/icon/i-handlebars2.png";
import dotenv from "../../assets/icon/i-dotenv.png";
import sequelize from "../../assets/icon/i-sequelize.png";
import heroku from "../../assets/icon/i-heroku.png";
import moment from "../../assets/icon/i-moment.png";

const data = [
    {
        id: 1,
        image: project1,
        title: "MeGame",
        description: "Play and have fun with this interactive game with React. The game will start all over if an image is clicked more than once.",
        github: "https://github.com/MANDYTSANG007/megame",
        demo: "https://mandytsang007.github.io/megame/",
        tools: [
            react, node, bootstrap, js
        ],
    },
    {
        id: 2,
        image: project2,
        title: "Perfect Cup - A Coffee App.",
        description: "A coffee shop application that promotes ingredient transparency. This app. provides an informative platform for coffee lovers to create their Perfect Cup.",
        github: "https://github.com/MChambersIV/Perfect-Cup",
        demo: "https://powerful-wildwood-54385.herokuapp.com/",
        tools: [
            express, mysql, dotenv, sequelize
        ],
    },
    {
        id: 3,
        image: project3,
        title: "TechTalk - A Developer Tech Blog",
        description: "TechTalk is built using Model-View-Controller(MVC), a software architectual framework, and an Object-relational mapping(ORM) programming technique. Developers can publish their blog posts in this platform.",
        github: "https://github.com/MANDYTSANG007/Developers-Tech-Blog",
        demo: "https://mandyblogapp.herokuapp.com/",
        tools: [
            express, handlebars, heroku, sequelize
        ],
    },
    {
        id: 4,
        image: project4,
        title: "Work-Day-Scheduler",
        description: "A single-day planner that helps you organize your schedules better.",
        github: "https://github.com/MANDYTSANG007/Work-Day-Scheduler",
        demo: "https://mandytsang007.github.io/Work-Day-Scheduler/",
        tools: [
            js, bootstrap, jquery, moment
        ],
    },
]

const Portfolio = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="section">
            <div className="portfolio__title"> Portfolio </div>
            {
                data.map(({ id, image, title, description, github, demo, tools }) => {
                    return (
                        <div className="project__container">
                            <div data-aos="fade-left" key={id} className="portfolio__box">
                                <img className="photo" src={image} alt={title} />
                                <div className="portfolio__content">
                                    <h3 className="project__title">{title}</h3>
                                    <div className="project__description">{description}</div>
                                    <div>
                                        <a href={github} className="btn">GitHub</a>
                                        <a href={demo} className="btn btn-primary">Demo</a>
                                    </div>
                                    <div className="project__icon">
                                        <img className="header__icon" src={tools[0]} alt="icon"></img>
                                        <img className="header__icon" src={tools[1]} alt="icon"></img>
                                        <img className="header__icon" src={tools[2]} alt="icon"></img>
                                        <img className="header__icon" src={tools[3]} alt="icon"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Portfolio;








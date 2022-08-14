import React, { useEffect } from "react";
import "./portfolio3.css";
import Aos from "aos";
import "aos/dist/aos.css";
import project1 from '../../assets/project/onion-man.png';
import project2 from '../../assets/project/megame.png';
import project3 from '../../assets/project/perfect-cup.png';
import project4 from '../../assets/project/techTalk.png';
import project5 from '../../assets/project/work-day-scheduler.png';
import jquery from "../../assets/icon/i-jQuery.png";
import bootstrap from "../../assets/icon/i-bootstrap1.png";
import react from "../../assets/icon/i-react.png";
import js from "../../assets/icon/i-js.png";
import mui from '../../assets/icon/i-mui.png'
import mongodbatlas from '../../assets/icon/i-MongoDB-Atlas.png'
import express from "../../assets/icon/i-Express.png";
import mysql from "../../assets/icon/i-mysql2.png";
import node from "../../assets/icon/i-nodejs8.png";
import netlify from "../../assets/icon/i-netlify.png";
import handlebars from "../../assets/icon/i-handlebars2.png";
import gis from "../../assets/icon/i-google-identity-services.png";
import dotenv from "../../assets/icon/i-dotenv.png";
import sequelize from "../../assets/icon/i-sequelize.png";
import heroku from "../../assets/icon/i-heroku.png";
import moment from "../../assets/icon/i-moment.png";

const data = [
    {
        id: 1,
        image: project1,
        title: "Onion Man",
        description: "A MERN stack app where users share their simple onion recipes. It is connected to the MongoDB Atlas cloud database and is equipped with Google Identity Services for user's authentication. ",
        github: "https://github.com/MANDYTSANG007/onion-man",
        demo: "https://onion-man.netlify.app",
        tools: [
            mongodbatlas, express, react, node, mui, gis, netlify, heroku
        ],
    },
    {
        id: 2,
        image: project2,
        title: "MeGame",
        description: "Play and have fun with this interactive game with React. The game will start all over if an image is clicked more than once.",
        github: "https://github.com/MANDYTSANG007/megame",
        demo: "https://mandytsang007.github.io/megame/",
        tools: [
            react, node, bootstrap, js
        ],
    },
    {
        id: 3,
        image: project3,
        title: "Perfect Cup - A Coffee App.",
        description: "A coffee shop application that promotes ingredient transparency. This app. provides an informative platform for coffee lovers to create their Perfect Cup.",
        github: "https://github.com/MChambersIV/Perfect-Cup",
        demo: "https://powerful-wildwood-54385.herokuapp.com/",
        tools: [
            express, mysql, dotenv, sequelize
        ],
    },
    {
        id: 4,
        image: project4,
        title: "TechTalk - A Developer Tech Blog",
        description: "TechTalk is built using Model-View-Controller(MVC), a software architectual framework, and an Object-relational mapping(ORM) programming technique. Developers can publish their blog posts in this platform.",
        github: "https://github.com/MANDYTSANG007/Developers-Tech-Blog",
        demo: "https://mandyblogapp.herokuapp.com/",
        tools: [
            express, handlebars, heroku, sequelize
        ],
    },
    {
        id: 5,
        image: project5,
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
            <h1 className="portfolio__title"> Portfolio </h1>
            {
                data.map(({ id, image, title, description, github, demo, tools }) => {
                    return (
                        <div key={id} className="project__container">
                            <div data-aos="fade-left" className="portfolio__box">
                                <img className="photo" src={image} alt={title} />
                                <div className="portfolio__content">
                                    <h3 className="project__title">{title}</h3>
                                    <div className="project__description">{description}</div>
                                    <div>
                                        <a href={github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                                        <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Demo</a>
                                    </div>
                                    {tools.map((tools, id) => (
                                        <div key={id}className="project__icon">
                                            <img className="header__icon" src={`${tools}`} alt="icon" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Portfolio;








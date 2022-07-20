import React, { useEffect } from "react";
import "./portfolio2.css";
import Aos from "aos";
import "aos/dist/aos.css";
import project1 from '../../assets/project/megame.png';
import project2 from '../../assets/project/perfect-cup.png';
import project3 from '../../assets/project/techTalk.png';
import project4 from '../../assets/project/work-day-scheduler.png';
import jquery from "../../assets/icon/i-jQuery.png";


const data = [
    {
        id: 1,
        image: project1,
        title: "MeGame",
        github: "https://github.com/MANDYTSANG007/megame",
        demo: "https://mandytsang007.github.io/megame/",
    },
    {
        id: 2,
        image: project2,
        title: "Perfect Cup - A Coffee App.",
        github: "https://github.com/MChambersIV/Perfect-Cup",
        demo: "https://powerful-wildwood-54385.herokuapp.com/",
    },
    {
        id: 3,
        image: project3,
        title: "TechTalk - A Developer Tech Blog",
        github: "https://github.com/MANDYTSANG007/Developers-Tech-Blog",
        demo: "https://mandyblogapp.herokuapp.com/",
    },
    {
        id: 4,
        image: project4,
        title: "Work-Day-Scheduler",
        github: "https://github.com/MANDYTSANG007/Work-Day-Scheduler",
        demo: "https://mandytsang007.github.io/Work-Day-Scheduler/",
    },
]

const Portfolio = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <section>
            <div className="portfolio__title"> Portfolio </div>
            {
                data.map(({ id, image, title, github, demo }) => {
                    return (
                        <div class="portfolio__container">
                            <div data-aos="fade-left" key={id}>
                                <img className="photo" src={image} alt={title} />
                                <div className="portfolio__content"><b>{title}</b>
                                    <br></br><br></br>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ad eum dolorum architecto obcaecati enim dicta praesentium,
                                    quam nobis! Neque ad aliquam facilis numquam. Veritatis, si
                                    <br></br>
                                    <div>
                                        <a href={github} className="btn">GitHub</a>
                                        <a href={demo} className="btn btn-primary">Demo</a>
                                    </div>
                                    <img className="header__icon" src={jquery} alt="icon"></img>
                                    <img className="header__icon" src={jquery} alt="icon"></img>
                                    <img className="header__icon" src={jquery} alt="icon"></img>
                                    <img className="header__icon" src={jquery} alt="icon"></img>
                                </div>
                            </div>
                        </div>
                    )
                })
            }s
        </section>
    )
}

export default Portfolio;








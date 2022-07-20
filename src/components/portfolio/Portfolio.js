import React, { useEffect } from "react";
import "./portfolio.css";
import Aos from "aos";
import "aos/dist/aos.css";
import project1 from '../../assets/project/megame.png';
import project2 from '../../assets/project/perfect-cup.png';
import project3 from '../../assets/project/techTalk.png';
import project4 from '../../assets/project/work-day-scheduler.png';



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
        // <section className="container1">
        <section>

            <h1 className="portfolio__title">Portfolio</h1>
            <div className="portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <section data-aos="fade-left" className="container1">
                                <div className="container2"></div>
                                <article data-aos="fade-left" key={id} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img className="portfolio__image" src={image} alt={title} />
                                        <h3>{title}</h3>
                                        <p>content</p>
                                        <a href={github} className="btn">GitHub</a>
                                        <a href={demo} className="btn btn-primary">Demo</a>
                                    </div>
                                    {/* <div className="portfolio__item-cta">
                                    <h3>{title}</h3>
                                    <p>content</p>
                                    <a href={github} className="btn">GitHub</a>
                                    <a href={demo} className="btn btn-primary">Demo</a>
                                </div> */}
                                </article></section>
                        )
                    })
                }
            </div>
        </section>

    )
}

export default Portfolio;


// <div class="container">
//     <div class="box">
//         <img src="" alt=""></img>
//     </div>
//     <div class="content">
//         <h1> title </h1>
//         <p>content</p>
//     </div>
// </div>

// css:
// body{
//     padding: 0px;
//     margin: 0px;
// }

// container{
//     position: relative;
//     margin : 20px;
//     float: left;
//     left: 25%;
//     top: 100px;
//     transition: 0.5s;
//     transform: TransformStreamDefaultController(-50%, -50%);
//     width: 600px;
//     height: 200px;
//     background: red;
//     border-radius: 10px;
//     box-showdow: 0px 1px 2px 2px rgba(0,0,0,0.5);
// }

// .box {
//     positoin: absolute;
//     background: red;
//     width: 160px
//     border-top-left-radius: 10px;
//     border-bottom-left-radius: 10px;
//     transition: 0.5s;
//     height: 100%;

// }

// .box img{
//     psoition: absolute;
//     top: 30px;
//     left: 10px;
//     height: 140px;
//     transition: 0.5s
//     width: 140px
//     border-radius: 50%
// }
// .content{
//     position: absolute;
//     width: 100%;
//     height: 100%
// }

// .content h1{ 
//     position: absolute';
//     left: 430px
//     color: red
// }

// .content p{
//     positon: absolute;
//     top: 20px
//     letter-spacing: 1px
//     color: red
//     width: 430px
//     left: 430px
//     left: 170px
//     height: 100%
// }

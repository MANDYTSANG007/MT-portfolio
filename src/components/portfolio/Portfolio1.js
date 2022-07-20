import React, { useEffect } from "react";
import "./portfolio1.css";
import Aos from "aos";
import "aos/dist/aos.css";
import project1 from '../../assets/project/megame.png';
import project2 from '../../assets/project/perfect-cup.png';
import project3 from '../../assets/project/techTalk.png';
import project4 from '../../assets/project/work-day-scheduler.png';

/*use span method and table to align image and descritpion*/


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
            <div> Hello</div>
            {
                data.map(({ id, image, title, github, demo }) => {
                    return (
                        <div>
                        <div className="meta">
                            <img className="photo" src={image} alt={title}/>
                            <span>Learning Title <br></br>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, si</span>
                            <span><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit</p>
                            </span>
                            <span>Learning Title <br></br></span>
                            
                        </div>
                        {/* <div className="description">
                            <h5>LEARNING</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit</p>
                        </div> */}
                        </div>
                    )
                })
            }


        </section>
    )
}

export default Portfolio;








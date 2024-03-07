import React from "react";
import { cardData } from "../../data/home";
import {ProjectCard} from '../../components/cards/project-card';




export const Project = () => {
    return(
        <>
        <div className="container flex flex-col mt-[124px]">
            <h2 className="text-3xl font-bold text-secondary mb-[38px] text-center md:text-4xl md:text-left" data-aos="fade-right">Projects</h2>
            <p className="w-full h-auto text-md text-black/50 text-center md:w-[584px] md:text-left" data-aos="fade-right">Things I’ve built so far</p>
            <div className="grid grid-cols-1 ml-[-8px] gap-[47px] md:grid-cols-2 lg:grid-cols-3 mt-[30px]" data-aos="fade-right">
                        {cardData.map((item) => (
                            <ProjectCard 
                            aos={item.aos}
                            id={item.id}
                             img={item.img}
                             title={item.title}
                             text={item.text}
                             link={item.link}
                             linktext={item.linktext}
                             link2={item.link2}
                             linktext2={item.linktext2}
                            />
                        ))}
                    </div>
        </div>
        </>
    )
};
import React from "react";
import myPhoto from '../../assets/myPhoto.jpg';
import { cardData, imgData } from "../../data/home";
import { ProjectCard } from "../../components/cards/project-card";



export const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="container mt-[265px] flex flex-col justify-center items-center md:flex-row md:justify-between">
                    <h2 className="w-full h-auto text-center text-3xl text-secondary font-bold md:text-4xl md:w-[418px] md:text-left lg:text-6xl lg:w-[697px] mb-[40px]" data-aos="fade-right" data-aos-duration="3000">Hi 👋, My name is <span className="text-sky-600">Oktamov Sh</span> I build things for web</h2>
                    <div className="w-[300px] h-[300px] md:w-[349px] md:h-[349px] rounded-[50%] overflow-hidden shadow-2xl shadow-gray-500" data-aos="fade-left" data-aos-duration="3000">
                        <img src={myPhoto} alt="img" className=" w-full h-full"/>
                    </div>
                </div>
            </section>
            <section className="techs">
                <div className="container flex flex-col items-center mt-[200px]">
                    <h2 className="text-center text-secondary text-4xl font-bold mb-[49px]" data-aos="fade-up-right">My Tech Stack</h2>
                    <p className="w-full text-center text-lg font-medium text-black/50" data-aos="fade-up-left">Technologies I’ve been working with recently</p>
                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[109px] md:gap-[60px] gap-[10px] mt-[110px]">
                        {imgData.map((item) => (
                            <>
                             <div className="w-[120px] h-[120px] flex items-center justify-center" data-aos={item.aos} data-aos-duration="3000">
                                <img src={item.img} alt="img" className="w-[60px] h-[60px] md:w-[110px] md:h-[110px] lg:w-[129px] lg:h-[129px]"/>
                             </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
            <section className="projects">
                <div className="container flex flex-col items-center justify-center mt-[200px]">
                    <h2 className="text-3xl font-medium text-secondary mb-[49px] md:text-4xl md:font-bold" data-aos="fade-up-right">Projects</h2>
                    <p className="text-lg text-black/50 md:text-2xl mb-[96px]" data-aos="fade-up-left" >Things I’ve built so far</p>
                    <div className="grid grid-cols-1 ml-[-8px] gap-[47px] md:grid-cols-2 lg:grid-cols-3">
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
            </section>
        </>
    )
}
import React from "react";
import live from '../../../assets/icons/live.svg';
import gitlink from '../../../assets/icons/gitlink.svg';





export const ProjectCard = ({img, aos, title, link, link2, linktext, linktext2, text, id, stack}) => {

    return (
        <>
         <div className="w-[300px] h-[567px] lg:w-[349px] flex flex-col items-center justify-center shadow-lg shadow-gray-500 rounded-[15px] mb-[30px]" key={id} data-aos={aos} data-aos-duration="3000">
            <img src={img} alt="img" className="w-full h-auto  translate-y-[-52px]" />
            <div className=" pl-[28px] pr-[31px]">
            <h3 className="text-center text-2xl text-secondary font-medium mb-[17px]"><a href="https://giper-mart-kappa.vercel.app/">{title}</a></h3>
            <p className="text-center mb-[12px] text-md text-black/50">{text}</p>
            <div className="flex items-center justify-center gap-1 mb-[20px]">
                <p className="text-md text-secondary font-normal">Tech stack:</p>
                <p className="text-md text-secondary">{stack}</p>
            </div>
            <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[10px]">
                <img src={live} alt="live" className="w-[15px] h-[15px]" />
                <a href={link} className="text-black decoration-2">{linktext}</a>
            </div>
            <div className="flex items-center gap-[10px]">
                <img src={gitlink} alt="live" className="w-[15px] h-[15px]" />
                <a href={link2} className="text-black">{linktext2}</a>
            </div>
            </div>
            </div>
         </div>
        </>
    )
}
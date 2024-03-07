import React from "react";
import { imgData } from "../../data/home";




export const Stack = () => {
    return (
        <>
            <div className="container mt-[124px]" data-aos="fade-right">
                <h2 className="text-3xl font-bold text-secondary mb-[38px] text-center md:text-4xl md:text-left">My Tech Stack</h2>
                <p className="w-full h-auto text-md text-black/50 text-center md:w-[584px] md:text-left"> Technologies I’ve been working with recently</p>
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[109px] md:gap-[60px] gap-[10px] mt-[110px]">
                    {imgData.map((item) => (
                        <div className="w-[120px] h-[120px] flex items-center justify-center" data-aos={item.aos} data-aos-duration="3000">
                            <img src={item.img} alt="img" className="w-[60px] h-[60px] md:w-[110px] md:h-[110px] lg:w-[129px] lg:h-[129px]" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
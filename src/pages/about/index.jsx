import React from "react";





export const About = () => {
    return (
        <>
        <div className="container mt-[124px]" data-aos="fade-right">
            <div className="flex flex-col mb-[50px]">
                <h2 className=" text-3xl font-bold text-secondary mb-[38px] text-center md:text-4xl md:text-left">About Me</h2>
                <p className="w-full h-auto text-md text-black/50 text-center md:w-[584px] md:text-left">The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
            </div>
            <div>
                <h2 className=" text-3xl font-bold text-secondary mb-[38px] text-center md:text-4xl md:text-left">Education</h2>
                <div className="flex items-center gap-[30px] justify-center mb-[20px] md:text-left md:justify-start">
                    <h3 className="text-xl text-black/50 font-medium">Front-End Developer</h3>
                    <div className="w-[84px] h-[24px] rounded-[100px] bg-green-300 flex items-center justify-center">
                        <p className="text-[13px] text-green-900">Full-Time</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[88px] md:text-left md:justify-start">
                    <h4 className="text-md font-normal text-black/50">Najot Ta`lim</h4>
                    <p className="text-md font-normal text-black/50">Sep 11 - May 1</p>
                </div>
            </div>
        </div>
        </>
    )
};
import React from "react";




export const Contact = () => {
    return (
        <>
        <div className="container flex flex-col items-center justify-center mt-[124px]">
            <h2 className="text-3xl font-bold text-secondary mb-[38px] text-center md:text-4xl md:text-left" data-aos="fade-right">For any questions please mail us:</h2>
            <a href="shokhuk006@gmail.com"><h4 className="text-xl font-bold text-secondary underline" data-aos="fade-right" data-aos-delay="200">shokhuk006@gmail.com</h4></a>
            <div className="flex items-center justify-center gap-[20px] mt-[30px]" data-aos="fade-right" data-aos-delay="400">
                <p className="text-xl font-bold text-secondary">TEL:</p>
                <a href="+998933315557"><p className=" h-auto text-md text-black/50 text-center md:text-left underline">998933315557</p></a>
            </div>
        </div>
        </>
    )
};
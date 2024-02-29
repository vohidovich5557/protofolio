import React from "react";
import logo from '../../assets/logo.png';
import { logoData, navData } from "../../data/home";
import Burger from '../../assets/icons/list.svg';
import { Link } from "react-router-dom";



export const Header = () => {
    return (
        <>
            <div className="container flex items-center justify-between mt-[30px]">
                <h2 className="text-lg font-semibold">Protofolio</h2>
                <nav className=" items-center gap-[51px] hidden md:flex ">
                    <ul className="flex items-center gap-[67px]">
                        {navData.map((item) => (
                            <>
                                <Link to={item.path}>
                                    <li key={item.id}><a className=" text-primary text-md hover:text-black">{item.name}</a></li>
                                </Link>
                            </>
                        ))}
                    </ul>
                    <div className="hidden items-center gap-[20px] lg:flex">
                        {logoData.map((item) => (
                            <a href={item.path}>
                                <img src={item.img} alt="img" className="w-[30px] h-[30px]" />
                            </a>
                        ))}
                    </div>
                </nav>
                <img src={Burger} alt="img" className="w-[24px] h-[24px] md:hidden lg:hidden" />
            </div>
        </>
    )
};
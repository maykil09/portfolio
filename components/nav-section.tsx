"use client";

import React, { useEffect, useState } from "react";

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed z-50 px-6 py-3 flex justify-between items-center rounded-xl transition-all duration-300 mx-auto ${
                scrolled
                    ? "top-2 left-1/2 transform -translate-x-1/2 w-2/3 border border-white/10 bg-black/20 backdrop-blur-sm shadow-md"
                    : "top-4 left-4 right-4 w-[calc(100%-2rem)] bg-transparent"
            }`}
        >
            <h1 className="text-lg font-bold">John Michael Guilaran</h1>
            <div className="flex items-center space-x-6 font-semibold">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
};

export default Nav;

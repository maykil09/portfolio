"use client";

import { X, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";

const Nav = ({ scrolled }: { scrolled: boolean }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            className={`fixed z-50 px-6 py-3 flex justify-between items-center rounded-xl transition-all duration-300 mx-auto ${
                scrolled
                    ? "top-2 left-1/2 transform -translate-x-1/2 w-2/3 border border-white/10 bg-black/20 backdrop-blur-sm shadow-md"
                    : "top-4 left-4 right-4 w-[calc(100%-2rem)] bg-transparent"
            }`}
        >
            <h1 className="text-lg font-bold">John Michael Guilaran</h1>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 font-semibold">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-2xl focus:outline-none"
            >
                {menuOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="absolute top-full mt-2 left-0 w-full bg-black/90 text-white p-6 rounded-lg flex flex-col space-y-4 md:hidden">
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </a>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>
                        Skills
                    </a>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>
                        Experience
                    </a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>
                        Projects
                    </a>
                    <a href="#education" onClick={() => setMenuOpen(false)}>
                        Education
                    </a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </div>
            )}
        </div>
    );
};

export default Nav;

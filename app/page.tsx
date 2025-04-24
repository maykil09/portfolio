"use client";

import React, { useEffect, useRef, useState } from "react";
import Hero from "@/components/hero-section";
import AboutMe from "@/components/about-me-section";
import Skills from "@/components/skills-section";
import Projects from "@/components/projects-section";
import Experience from "@/components/experience-section";
import Education from "@/components/education-section";
import Contact from "@/components/contact-section";
import Nav from "@/components/nav-section";

export default function Home() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const isScrolled = scrollRef.current.scrollTop > 24;
                setScrolled((prev) => {
                    // only update state if it actually changed
                    if (prev !== isScrolled) {
                        return isScrolled;
                    }
                    return prev;
                });
            }
        };

        const container = scrollRef.current;
        container?.addEventListener("scroll", handleScroll);

        return () => {
            container?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={scrollRef}
            className="h-screen overflow-y-auto snap-y snap-mandatory"
        >
            <div className="space-y-10 p-6 max-w-6xl mx-auto">
                {/* <div className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:30px_30px] opacity-40 z-0" /> */}

                <Nav scrolled={scrolled} />

                {/* Hero Section */}
                <Hero />

                {/* About Me Section */}
                <AboutMe />

                {/* Skills / Tech Stack */}
                <Skills />

                {/* Experience */}
                <Experience />

                {/* Projects / Case Studies */}
                <Projects />

                {/* Education */}
                <Education />

                {/* Contact */}
                <Contact />
            </div>
        </div>
    );
}

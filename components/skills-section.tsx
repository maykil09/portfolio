"use client";
import SectionTitle from "@/components/section-title";
import { techIcons } from "@/lib/icons";
import Image from "next/image";
import AnimateDiv from "@/components/animate-div";

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen snap-start flex flex-col justify-center"
        >
            <SectionTitle title={"Skills / Tech Stack"} />
            <div className="grid grid-cols-5 items-center content-center gap-4">
                {techIcons.map((icon, index) => (
                    <AnimateDiv
                        key={index}
                        index={index}
                        Component={Image}
                        componentProps={{
                            src: icon.src,
                            alt: icon.alt,
                            width: icon.width,
                            height: icon.height,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;

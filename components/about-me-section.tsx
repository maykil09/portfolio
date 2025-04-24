import SectionTitle from "@/components/section-title";
import React from "react";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="min-h-screen snap-start flex flex-col justify-center"
        >
            <SectionTitle title={"About me"} />
            <p className="text-lg">
                I'm a passionate developer with a strong background in
                full-stack development. I love creating digital experiences that
                are both visually appealing and functionally powerful. Whether
                working on freelance projects or collaborating with a team, I
                bring a user-focused mindset and a drive for quality.
            </p>
            <p className="text-lg ">
                Outside of coding, I'm always learning—exploring new frameworks,
                staying updated on tech trends, or tinkering with personal
                projects. Let’s build something amazing together!
            </p>
        </section>
    );
};

export default AboutMe;

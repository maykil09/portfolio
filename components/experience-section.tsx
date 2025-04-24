"use client";
import AnimateDiv from "@/components/animate-div";
import CardExperience from "@/components/card-experience";
import SectionTitle from "@/components/section-title";
import { workExperiences } from "@/lib/works";

const Experience = () => {
    console.log(workExperiences);
    return (
        <section
            id="experience"
            className="min-h-screen flex flex-col justify-center"
        >
            <SectionTitle title={"Experience"} />
            <div className="space-y-3">
                {workExperiences.map((workExperience, index) => (
                    <AnimateDiv
                        key={index}
                        index={index}
                        Component={CardExperience}
                        componentProps={{ workExp: workExperience }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;

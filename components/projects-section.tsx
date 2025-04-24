"use client";
import AnimateDiv from "@/components/animate-div";
import CardProject from "@/components/card-project";
import SectionTitle from "@/components/section-title";
import { sampleProjects } from "@/lib/sample-projects";

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen snap-start flex flex-col justify-center"
        >
            <SectionTitle title={"Projects"} />
            <div className="space-y-4">
                {sampleProjects.map((project, index) => (
                    <AnimateDiv
                        key={index}
                        index={index}
                        Component={CardProject}
                        componentProps={{
                            project: project,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;

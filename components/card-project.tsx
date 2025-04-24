import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/sample-projects";

const CardProject = ({ project }: { project: Project }) => {
    return (
        <Card>
            <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{project.ProjName}</h3>
                <p>{project.description}</p>
                <p className="text-sm text-muted-foreground">
                    Tech: {project.tech}
                </p>
            </CardContent>
        </Card>
    );
};

export default CardProject;

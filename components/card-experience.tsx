import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { WorkExperience } from "@/lib/works";

const CardExperience = ({ workExp }: { workExp: WorkExperience }) => {
    return (
        <Card>
            <CardContent className="p-4">
                <h3 className="font-semibold">
                    {workExp.position} – {workExp.company}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {workExp.startDate} – {workExp.endDate}
                </p>
                <ul className="list-disc list-inside mt-2 text-sm">
                    {workExp.responsibilities.map(
                        (item: String, index: number) => {
                            console.log(item);
                            return <li key={index}>{item}</li>;
                        }
                    )}
                </ul>
            </CardContent>
        </Card>
    );
};

export default CardExperience;

"use client";
import SectionTitle from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section
            id="education"
            className="min-h-screen flex flex-col justify-center"
        >
            <SectionTitle title={"Education"} />
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <Card>
                    <CardContent className="p-4">
                        <p className="font-bold">
                            University of Science and Technology of Southern
                            Philippines
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Bachelor of Science in Information Technology, 2020
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
};

export default Education;

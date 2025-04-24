"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="min-h-screen snap-start px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center relative overflow-hidden">
            <div className="z-10 flex justify-between md:justify-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-white"
                >
                    <Image
                        src="/assets/images/dp.jpg"
                        alt="John Michael Guilaran"
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full"
                    />
                </motion.div>
                <div></div>
            </div>

            <div className="z-10 text-center md:text-left space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl font-extrabold"
                >
                    Hi! I'm Michael.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl text-muted-foreground"
                >
                    Turning curiosity into code and code into impact.
                </motion.p>
                <p></p>
                <div className="flex justify-center md:justify-start gap-4">
                    <Button variant="outline" asChild>
                        <a
                            href="https://drive.google.com/file/d/194Jd_A-Bd-PRjXhVsKzLd53-GEQqmPwi/view?usp=drive_link"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </Button>
                    <Button variant="outline" asChild>
                        <a
                            href="https://www.linkedin.com/in/john-michael-guilaran-6b4152201/"
                            target="_blank"
                        >
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

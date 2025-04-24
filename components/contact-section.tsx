"use client";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Run only on the client-side
    }, []);

    if (!isClient) {
        return null; // Prevent rendering during SSR
    }
    return (
        <section
            id="contact"
            className="min-h-screen snap-start flex flex-col justify-center"
        >
            <SectionTitle title={"Contact"} />

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <form method="POST" className="mt-4 space-y-4">
                    <div className="flex flex-col">
                        <label
                            htmlFor="fullname"
                            className="text-sm font-medium"
                        >
                            Full Name
                        </label>
                        <Input
                            id="fullname"
                            name="name"
                            type="text"
                            required
                            placeholder="Enter your full name"
                            className="mt-2"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="mt-2"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="message"
                            className="text-sm font-medium"
                        >
                            Message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Enter your message"
                            className="mt-2"
                        />
                    </div>

                    <Button type="submit" className="mt-4 w-full">
                        Send Message
                    </Button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;

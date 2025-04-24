"use client";
import { motion } from "framer-motion";

const SectionTitle = ({ title }: { title: String }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold mb-2"
        >
            {title}
        </motion.h2>
    );
};

export default SectionTitle;

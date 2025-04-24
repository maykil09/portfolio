"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimateDiv = ({
    index,
    Component,
    componentProps,
}: {
    index: number;
    Component: React.ElementType;
    componentProps: React.ComponentProps<any>;
}) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Component {...componentProps} />
        </motion.div>
    );
};

export default AnimateDiv;

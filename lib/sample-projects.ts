export type Project = {
    ProjName: String;
    description: String;
    tech: String;
};

export const sampleProjects: Project[] = [
    {
        ProjName: "Confidential Feedback System",
        description:
            "Developed a comprehensive Feedback System with a dynamic admin dashboard that enables store and product management. The platform allows admins to track store statistics, manage users, products, and reviews. I integrated sentiment analysis into the backend to process and categorize customer feedback into positive, neutral, or negative sentiment, assisting with better decision-making. I also built a mobile app for customers to search stores, view details, and provide reviews based on their service or product experiences.",
        tech: "React.js, Tailwind CSS, MySQL, Node.js, Express, Flutter",
    },

    {
        ProjName: "Confidential Event Management System",
        description:
            "Built a full-featured Event Management System connecting customers with nearby, verified event coordinators. Customers can search for event coordinators based on location, view their offered services, and check admin verification status. Both customers and coordinators interact through a mobile app, while admins manage users and verification through a web-based dashboard. My role covered both frontend and backend development, mobile app integration, and location-based services.",
        tech: "React.js, Tailwind CSS, Node.js, Express, Mongoose, MongoDB, Flutter, Google Maps API",
    },
    {
        ProjName: "Confidential Fintech Project",
        description:
            "Collaborated as part of a team to build a secure payment gateway enabling merchants to accept card payments for seamless, cashless transactions. My role spanned both frontend and backend development, including third-party payment API integration and creating internal API endpoints. I also contributed to refining the frontend design to improve usability and consistency.",
        tech: "Laravel, Next.js, Redux",
    },
    {
        ProjName: "Confidential Mobile Quiz App",
        description:
            "Developed a mobile quiz application designed to help students reinforce their learning. The app requires users to read educational modules before unlocking the quiz section, ensuring proper preparation. Students can track their progress through completed modules and quiz scores. The app is built with a focus on user-friendly design and local data management for offline access.",
        tech: "Java (Android)",
    },
];

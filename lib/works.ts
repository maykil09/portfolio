export type WorkExperience = {
    company: string;
    location: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
};

export const workExperiences: WorkExperience[] = [
    {
        company: "Freelance",
        location: "Remote",
        position: "Full Stack Developer",
        startDate: "May 2021",
        endDate: "Present",
        responsibilities: [
            "Create user-friendly and visually appealing dashboard interfaces using React.js",
            "Implement responsive design principles for seamless user experience across devices",
            "Design RESTful API endpoints to facilitate communication between frontend and backend",
            "Ensure secure and efficient data retrieval and manipulation",
            "Optimize database queries to reduce response times",
            "Refactor frontend and backend code to enhance performance",
        ],
    },
    {
        company: "Freelance",
        location: "Remote",
        position: "Mobile Developer",
        startDate: "May 2021",
        endDate: "Present",
        responsibilities: [
            "Develop native Android apps with Java",
            "Utilize Flutter for cross-platform mobile app development",
            "Implement responsive mobile user interfaces",
            "Ensure seamless integration with backend services and API endpoints",
        ],
    },
    {
        company: "ShipERP",
        location: "Mandaluyong City, Philippines",
        position: "PHP Developer",
        startDate: "June 2023",
        endDate: "October 2024",
        responsibilities: [
            "Implement and maintain Continuous Integration/Continuous Deployment (CI/CD) processes, ensuring a streamlined development workflow.",
            "Accurately estimate project requirements for maintenance, ensuring efficient resource allocation and project planning.",
            "Test and deploy applications to the production server, ensuring reliable and error-free releases.",
            "Optimize application performance by analyzing and improving code efficiency, enhancing overall system responsiveness and user experience.",
        ],
    },
    {
        company: "Fligno PH",
        location: "Cagayan de Oro City, Philippines",
        position: "Associate Software Engineer",
        startDate: "October 2023",
        endDate: "June 2024",
        responsibilities: [
            "Designed and developed new projects, as well as enhanced existing ones, using Laravel and JavaScript frameworks (React), ensuring high-quality and scalable solutions.",
            "Integrated third-party APIs to extend project functionalities, enhancing user experience and system capabilities.",
            "Implemented Continuous Integration/Continuous Deployment (CI/CD) processes, maintaining a clean and efficient codebase.",
            "Accurately estimated project requirements for both maintenance and new development, ensuring timely delivery and resource optimization.",
        ],
    },
    {
        company: "CSS CORE Inc.",
        location: "Cagayan de Oro City, Philippines",
        position: "Technical Support",
        startDate: "February 2023",
        endDate: "February 2024",
        responsibilities: [
            "Maintained and monitored computer networks and systems, ensuring optimal performance and minimizing downtime.",
            "Set up and configured systems based on detailed instructions and diagrams, troubleshooting and resolving technical issues efficiently.",
            "Logged and addressed queries from customers and employees, providing timely and effective technical support.",
        ],
    },
];

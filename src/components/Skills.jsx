import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Globe className="w-6 h-6 text-blue-500" />,
            skills: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "Redux"]
        },
        {
            title: "Backend Development",
            icon: <Server className="w-6 h-6 text-purple-500" />,
            skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs"]
        },
        {
            title: "Database",
            icon: <Database className="w-6 h-6 text-green-500" />,
            skills: ["MongoDB", "SQL", "PostgreSQL", "Mongoose"]
        },
        {
            title: "Tools & Others",
            icon: <Code className="w-6 h-6 text-orange-500" />,
            skills: ["Git/GitHub", "Docker", "AWS (Basic)", "Agile/Scrum", "JIRA"]
        }
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Skills & <span className="text-blue-500">Expertise</span></h2>
                    <p className="text-gray-400">My technical toolbelt for building scalable applications.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6 border border-gray-700">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

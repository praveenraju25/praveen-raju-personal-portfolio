import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Code } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Enterprise E-Commerce Platform",
            description: "A scalable microservices-based e-commerce solution processing high-volume transactions with real-time inventory management.",
            tech: ["React", "Node.js", "MongoDB", "Redux", "AWS"],
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            links: { demo: "#", github: "#" },
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Real-time Task Collaborator",
            description: "Project management tool enabling teams to collaborate in real-time with websockets, automated workflows, and analytics.",
            tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
            links: { demo: "#", github: "#" },
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Agile Finance Dashboard",
            description: "Complex financial data visualization dashboard for tracking investments, expenses, and predictive market trends.",
            tech: ["Java Spring Boot", "React", "D3.js", "MySQL"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            links: { demo: "#", github: "#" },
            color: "from-amber-500 to-orange-500"
        }
    ];

    return (
        <section id="projects" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:flex justify-between items-end"
                >
                    <div>
                        <span className="text-blue-500 font-medium tracking-wider mb-2 block uppercase text-sm">Selected Works</span>
                        <h2 className="text-4xl md:text-5xl font-bold heading-font">Featured <span className="text-gradient">Projects</span></h2>
                    </div>
                    <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-right hidden md:block">
                        A showcase of my technical projects, ranging from web applications to backend systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-2xl bg-[#0f172a] border border-white/5 overflow-hidden hover:border-white/10 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`} />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                    <a href={project.links.github} className="p-2 bg-black/50 backdrop-blur-md rounded-lg text-white hover:bg-white hover:text-black transition-colors">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.links.demo} className="p-2 bg-black/50 backdrop-blur-md rounded-lg text-white hover:bg-white hover:text-black transition-colors">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="space-y-4 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-medium px-2.5 py-1 bg-white/5 text-gray-300 rounded-md border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center text-blue-400 text-sm font-medium group-hover:gap-2 transition-all cursor-pointer">
                                        View Case Study <ArrowRight size={16} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

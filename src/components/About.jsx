import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, User, Trophy, Heart } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/5 blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <span className="text-blue-500 font-medium tracking-wider mb-2 block uppercase text-sm">Who I Am</span>
                            <h2 className="text-4xl md:text-5xl font-bold heading-font mb-6">About <span className="text-gradient">Me</span></h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I am a dedicated software engineer with 4 years of hands-on experience in the tech industry.
                                Currently working at <span className="text-white font-medium">Infosys Ltd</span>, I specialize in building robust backend systems and dynamic frontend interfaces.
                                My journey involves solving complex problems using the MERN stack and Java technologies.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="glass-card p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
                                <Briefcase className="text-blue-500 mb-4" size={32} />
                                <h3 className="text-xl font-bold text-white mb-1">Infosys Ltd.</h3>
                                <p className="text-sm text-gray-500 mb-2">Software Engineer</p>
                                <p className="text-xs text-blue-400 bg-blue-500/10 inline-block px-2 py-1 rounded">Present</p>
                            </div>

                            <div className="glass-card p-6 rounded-2xl hover:border-purple-500/30 transition-colors">
                                <Trophy className="text-purple-500 mb-4" size={32} />
                                <h3 className="text-xl font-bold text-white mb-1">4 Years</h3>
                                <p className="text-sm text-gray-500">Total Experience</p>
                                <p className="text-xs text-gray-500 mt-2">Delivered 10+ Projects</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <User size={20} className="text-blue-500" /> Education
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-1 h-full bg-blue-500/20 rounded-full" />
                                    <div>
                                        <h4 className="text-white font-medium">B.Sc. Physics</h4>
                                        <p className="text-sm text-gray-400">Physics</p>
                                        <p className="text-xs text-gray-500 mt-1">2016 - 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>



                </div>
            </div>
        </section>
    );
};

export default About;

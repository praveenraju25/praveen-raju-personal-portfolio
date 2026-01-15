import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Dynamic Aurora Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-blue-400 text-sm font-medium mb-6 border-blue-500/20"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for new projects
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-font leading-tight">
                        Building Digital <br />
                        <span className="text-gradient">Experiences</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-400 mb-8 font-light max-w-lg">
                        I'm <span className="text-white font-medium">Praveen Raju</span>, a Software Engineer crafting scalable solutions with <span className="text-blue-400">Java</span> & <span className="text-purple-400">MERN Stack</span>.
                    </h2>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <a href="#projects" className="group px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                            View Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="px-8 py-3.5 glass-card hover:bg-white/5 text-white rounded-xl font-medium transition-all">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-6 mt-12 items-center">
                        <span className="text-sm text-gray-500 font-medium">Connect with me:</span>
                        <div className="flex gap-4">
                            <a href="#" className="p-2.5 rounded-lg glass-card text-gray-400 hover:text-white hover:border-blue-500/50 transition-all"><Github size={20} /></a>
                            <a href="#" className="p-2.5 rounded-lg glass-card text-gray-400 hover:text-white hover:border-blue-500/50 transition-all"><Linkedin size={20} /></a>
                            <a href="#" className="p-2.5 rounded-lg glass-card text-gray-400 hover:text-white hover:border-blue-500/50 transition-all"><Mail size={20} /></a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract Composition */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

                        {/* Main Card */}
                        <div className="absolute inset-4 glass-card rounded-3xl p-2 border border-white/5 shadow-2xl overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Coding Environment"
                                className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-700 scale-105"
                            />

                            {/* Floating Elements on top of image */}
                            <div className="absolute top-10 left-10 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl">
                                <Code2 className="text-blue-400 mb-2" />
                                <div className="h-2 w-24 bg-white/20 rounded-full mb-2" />
                                <div className="h-2 w-16 bg-white/10 rounded-full" />
                            </div>

                            <div className="absolute bottom-10 right-10 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl text-right">
                                <p className="text-2xl font-bold text-white mb-1">4+</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Years Exp.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

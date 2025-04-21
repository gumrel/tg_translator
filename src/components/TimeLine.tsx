import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TimelineItem {
    year: string;
    title: string;
    description?: string;
    projects?: { title: string; link: string }[];
    site?: string;
    siteName?: string;
}

interface TimelineProps {
    timeline: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
    return (
        <div className="relative">
            <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-gray-300 dark:bg-gray-600"></div>

            <ul className="pl-10">
                {timeline.map((item, index) => (
                    <motion.li
                        key={item.year}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative mb-8"
                    >
                        <div className="ml-8">
                            <time className="block font-mono text-gray-500 italic">{item.year}</time>
                            <h3 className="text-lg font-black">{item.title}</h3>
                            {item.description && <p className="text-gray-700 dark:text-gray-300">{item.description}</p>}

                            {item.projects && (
                                <ul className="mt-2">
                                    <p className="font-bold">Projects:</p>
                                    {item.projects.map((project) => (
                                        <Link key={project.title} to={project.link} className="block text-blue-500 underline-offset-4 hover:underline dark:text-pink-400">
                                            - {project.title}
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;

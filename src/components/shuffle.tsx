import { Component } from 'react';
import { motion } from 'framer-motion';

type Skill = {
    text: string;
};

const skills: Skill[] = [
    { text: 'Vue (2/3)' },
    { text: 'Nuxt 3' },
    { text: 'React' },
    { text: 'Next js' },
    { text: 'Javascript' },
    { text: 'Typescript' },
    { text: 'ThreeJs' },
    { text: 'Express.js' },
    { text: 'Sass/Scss' },
    { text: 'Vite' },
    { text: 'Tailwind' },
    { text: 'Docker' },
];

interface State {
    shuffledSkills: Skill[];
}

export default class Shuffle extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            shuffledSkills: skills,
        };
    }

    shuffleSkills = () => {
        this.setState((prevState) => ({
            shuffledSkills: [...prevState.shuffledSkills].sort(() => Math.random() - 0.5),
        }));
    };

    render() {
        const { shuffledSkills } = this.state;

        return (
            <div className="mx-auto w-full max-w-lg px-4">
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {shuffledSkills.map((skill, index) => (
                        <motion.div
                            key={skill.text + index}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="group flex flex-col items-center justify-center gap-1 rounded-xl bg-[#2d2d2dee]/10 px-4 duration-300 hover:rotate-12 dark:bg-[#2d2d2dee]/80"
                        >
                            <p className="flex h-20 items-center justify-center text-justify font-bold text-blue-500 duration-300 group-hover:text-pink-400 dark:text-pink-400 dark:group-hover:text-blue-400">
                                {skill.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 flex items-center justify-center">
                    <button
                        className="cursor-pointer rounded-xl bg-pink-400 px-6 py-4 text-xl font-bold text-white duration-300 hover:bg-pink-500 dark:bg-blue-400 dark:hover:bg-blue-500"
                        onClick={this.shuffleSkills}
                    >
                        Click to shuffle!
                    </button>
                </div>
            </div>
        );
    }
}

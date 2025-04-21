'use client';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import FadeIn from '../UI/FadeIn';

const headerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-10 w-full bg-white/25 backdrop-blur-md dark:bg-[#20202380]">
            <motion.nav aria-label="Global" className="mx-auto flex max-w-5xl items-center justify-between p-5 lg:px-8" {...headerAnimation}>
                <div className="flex lg:flex-1">
                    <FadeIn>
                        <Link className="!font-bold" to="/">
                            Maksim Kichigin
                        </Link>
                    </FadeIn>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <FadeIn>
                        <Link to="/Hackathons" className="text-lg font-bold">
                            Hackathons
                        </Link>
                    </FadeIn>
                    <FadeIn>
                        <Link to="/Works" className="text-lg font-bold">
                            Works
                        </Link>
                    </FadeIn>
                    <FadeIn>
                        <Link to="/Skills" className="text-lg font-bold">
                            Skills
                        </Link>
                    </FadeIn>
                    <FadeIn>
                        <Link to="/Contact" className="text-lg font-bold">
                            Contact
                        </Link>
                    </FadeIn>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <FadeIn> </FadeIn>
                </div>
            </motion.nav>
        </header>
    );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import FadeIn from '../../UI/FadeIn';

const headerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function MainHeader() {
    const isLibPage = location.pathname === '/Library';

    return (
        <header className="flex w-full justify-center">
            <div className="w-full max-w-lg">
                <motion.nav aria-label="Global" className="flex items-center justify-between p-5" {...headerAnimation}>
                    <div className="flex-1">
                        <FadeIn>
                            <Link className="!font-bold" to="/">
                                <img src="/images/SLANGLATE.svg" alt="" />
                            </Link>
                        </FadeIn>
                    </div>
                    {isLibPage ? (
                        <div className="flex gap-x-4">
                            <FadeIn>
                                <div>
                                    <p className="text-[#FFFFFF80]">Библиотека</p>
                                </div>
                            </FadeIn>
                        </div>
                    ) : (
                        <div className="flex gap-x-4">
                            <FadeIn>
                                <div>
                                    <p className="text-[#FFFFFF80]">Мастерская</p>
                                </div>
                            </FadeIn>
                        </div>
                    )}
                </motion.nav>
            </div>
        </header>
    );
}

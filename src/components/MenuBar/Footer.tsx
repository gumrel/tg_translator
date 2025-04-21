import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import FadeIn from '../../UI/FadeIn';

const footerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Footer() {
    return (
        <footer className="fixed bottom-5 left-1/2 w-[calc(100%-40px)] max-w-lg -translate-x-1/2 rounded-3xl bg-white/25 px-0 backdrop-blur-md sm:px-5 dark:bg-[#20202380]">
            <motion.nav aria-label="Footer" className="flex justify-center p-5" {...footerAnimation}>
                <div className="flex w-full items-center justify-between">
                    <FadeIn>
                        <Link to="/Library" className="flex flex-col items-center text-center text-xs font-bold">
                            <img src="/images/lib.svg" alt="Library" />
                            Библиотека
                        </Link>
                    </FadeIn>

                    <FadeIn>
                        <Link to="/" className="flex flex-col items-center text-center text-xs font-bold">
                            <img src="/images/trans.svg" alt="Translator" />
                            Переводчик
                        </Link>
                    </FadeIn>

                    <FadeIn>
                        <Link to="/Masterskaya" className="flex flex-col items-center text-center text-xs font-bold">
                            <img src="/images/master.svg" alt="Masterskaya" />
                            Мастерская
                        </Link>
                    </FadeIn>
                </div>
            </motion.nav>
        </footer>
    );
}

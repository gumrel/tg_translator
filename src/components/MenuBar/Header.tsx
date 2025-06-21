import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import FadeIn from '../../UI/FadeIn';

const headerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Header() {
    return (
        <header className="flex w-full justify-between">
            <div className="w-full">
                <motion.nav aria-label="Global" className="flex items-center justify-between py-5" {...headerAnimation}>
                    <div className="flex-1">
                        <FadeIn>
                            <Link className="!font-bold" to="/">
                                <img src="/images/SLANGLATE.svg" alt="" style={{ width: '75px', height: '35px' }} />
                            </Link>
                        </FadeIn>
                    </div>

                    <div className="flex gap-x-4">
                        <FadeIn>
                            <Link to="/HistoryTranslate">
                                <img className="cursor-pointer" src="/images/History.svg" alt="" />
                            </Link>
                        </FadeIn>

                        <FadeIn>
                            <Link to="/SavedTranslate">
                                <img className="cursor-pointer" src="/images/Save.svg" alt="" />
                            </Link>
                        </FadeIn>
                    </div>
                </motion.nav>
            </div>
        </header>
    );
}

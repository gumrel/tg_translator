import { motion } from 'framer-motion';
import FadeIn from '../../UI/FadeIn';

export default function Empty() {
    return (
        <FadeIn>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="flex h-screen flex-col items-center justify-start pt-32 text-center">
                    <img src="/images/duck.svg" alt="Пусто" />
                    <p className="text-xl text-gray-400">Здесь пока пусто</p>
                </div>
            </motion.div>
        </FadeIn>
    );
}

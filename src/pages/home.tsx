import { motion } from 'framer-motion';
import FadeIn from '../UI/FadeIn';
import BaseButton from '../UI/BaseButton';

import { timelineData } from '../services/constants';
import { useNavigate } from 'react-router-dom';
import CustomTextArea from '../UI/CustomTextArea';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <FadeIn>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    <div className="-mt-24">
                        <div className="flex gap-5">
                            <div className="mb-6 flex items-center justify-center rounded-md p-3 text-center backdrop-blur-md dark:bg-white/10">
                                <p className="min-h-7 md:text-lg">Hello</p>
                            </div>

                            <div className="mb-6 flex items-center justify-center rounded-md p-3 text-center backdrop-blur-md dark:bg-white/10">
                                <p className="min-h-7 md:text-lg">Moscow!</p>
                            </div>
                        </div>

                        <CustomTextArea />

                        <div className="mt-5">
                            <BaseButton>Перевод</BaseButton>
                        </div>
                    </div>
                </motion.div>
            </FadeIn>
        </>
    );
}

import { motion } from 'framer-motion';
import FadeIn from '../UI/FadeIn';
import BaseButton from '../UI/BaseButton';
import { Mails } from 'lucide-react';
import Timeline from '../components/TimeLine';

import { timelineData } from '../services/constants';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="-mt-24">
            <FadeIn>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mb-6 flex items-center justify-center rounded-md p-3 text-center backdrop-blur-md dark:bg-white/10"
                    style={{
                        backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
                        backgroundSize: '15px 15px',
                        backgroundRepeat: 'repeat',
                        opacity: 0.3,
                    }}
                >
                    <p className="min-h-7 md:text-lg">
                        <label>Hello, I'm a Frontend developer based in Moscow!</label>
                    </p>
                </motion.div>
            </FadeIn>
            <FadeIn>
                <div className="flex place-content-between">
                    <div>
                        <h3 className="text-4xl">Maksim Kichigin</h3>
                        <h3>( Developer - Hackathon enjoyer )</h3>
                    </div>
                    <img className="max-w-24 rounded-full border-2 border-white" src="/images/img.jpg" alt="" />
                </div>
            </FadeIn>

            <h3 className="my-10 text-left text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8">Bio</h3>
            <Timeline timeline={timelineData} />
            <BaseButton onClick={() => navigate('/Contact')}>
                <Mails className="h-5 w-5" />
                Contact me
            </BaseButton>
        </div>
    );
}

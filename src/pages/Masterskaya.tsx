import FadeIn from '../UI/FadeIn';
import { Link } from 'react-router-dom';
import Empty from '../components/Empty/Empty';
import BaseButton from '../UI/BaseButton';

export default function Masterskaya() {
    return (
        <div className="-mt-30 pb-24">
            <FadeIn>
                <div>
                    <Empty />
                </div>
            </FadeIn>

            <div className="fixed bottom-30 left-1/2 z-50 w-screen -translate-x-1/2 px-4">
                <div className="mx-auto max-w-lg">
                    <BaseButton>Создать новый</BaseButton>
                </div>
            </div>
        </div>
    );
}

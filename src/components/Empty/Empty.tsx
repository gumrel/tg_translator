import FadeIn from '../../UI/FadeIn';

export default function Empty() {
    return (
        <FadeIn>
            <div className="flex h-screen flex-col items-center justify-start pt-32 text-center">
                <img src="/images/duck.svg" alt="Пусто" />
                <p className="text-xl text-gray-400">Здесь пока пусто</p>
            </div>
        </FadeIn>
    );
}

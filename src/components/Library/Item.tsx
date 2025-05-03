import BaseButton from '../../UI/BaseButton';
import FadeIn from '../../UI/FadeIn';
// import { Link } from 'react-router-dom';

export default function Item() {
    return (
        <div className="">
            <FadeIn>
                <div className="mt-8 rounded-2xl bg-[#333536] p-5">
                    <div className="flex justify-between">
                        <h2 className="mr-3 max-w-[200px] text-6xl break-all">RUSSIAN SKUF</h2>

                        <div className="shrink-0">
                            <img src="/images/skuf.svg" alt="" className="w-30 object-contain" />
                        </div>
                    </div>

                    <p className="mt-3 font-sans text-lg font-extralight">Язык настоящих мужчин, ценителей светлого нефильтрованного и фырчания на ежа.</p>

                    <p className="mt-3 font-sans text-lg font-extralight">Вдохновлено: SKUFENG</p>

                    <div className="mt-6 flex gap-4">
                        <BaseButton>Попробовать</BaseButton>
                        <BaseButton variant="dark">Создатель языка</BaseButton>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

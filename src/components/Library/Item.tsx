import BaseButton from '../../UI/BaseButton';
import FadeIn from '../../UI/FadeIn';
// import { Link } from 'react-router-dom';

type ItemProps = {
    item: number;
};

export default function Item({ item }: ItemProps) {
    return (
        <div className="">
            <FadeIn>
                <div className="mt-8 rounded-2xl bg-[#000000] p-5 text-white">
                    <div className="flex justify-between">
                        <h2 className="mr-3 max-w-[200px] break-all">RUSSIAN SKUF</h2>

                        <div className="shrink-0">
                            <img src={`/images/skuf/skuf${item}.png`} alt="" className="w-24 object-contain" />
                        </div>
                    </div>

                    <p className="mt-3 max-w-[300px] font-sans text-sm font-extralight">Язык настоящих мужчин, ценителей светлого нефильтрованного и фырчания на ежа.</p>

                    <p className="mt-3 font-sans text-sm font-extralight">Вдохновлено: SKUFENG</p>

                    <div className="mt-6 flex gap-4">
                        <BaseButton>Попробовать</BaseButton>
                        <BaseButton variant="dark">Создатель языка</BaseButton>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

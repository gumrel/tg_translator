import FadeIn from '../../UI/FadeIn';
import { Link } from 'react-router-dom';

export default function Item() {
    return (
        <div className="">
            <FadeIn>
                <div className="relative mt-8 rounded-2xl bg-white p-5">
                    <div className="flex justify-between">
                        <h2 className="max-w-[200px] text-6xl break-all text-black">RUSSIAN SKUF</h2>

                        <div className="shrink-0">
                            <img src="/images/skuf.jpg" alt="" className="object-contain" />
                        </div>
                    </div>

                    <p className="mt-3 font-sans text-xl font-extralight text-black">Язык настоящих мужчин, ценителей светлого нефильтрованного и фырчания на ежа.</p>

                    <img src="/images/arrowLib.svg" alt="" className="absolute right-5 bottom-5" />
                </div>
            </FadeIn>
        </div>
    );
}

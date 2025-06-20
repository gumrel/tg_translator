import { Link } from 'react-router-dom';
import FadeIn from '../UI/FadeIn';

export default function Masterskaya() {
    const icons = [
        { src: '/images/masterskaya/l1.svg', label: 'Русский скуф' },
        { src: '/images/masterskaya/l2.svg', label: 'Аристократ' },
        { src: '/images/masterskaya/l3.png', label: 'Гопник' },
        { src: '/images/masterskaya/l4.png', label: 'Зумер' },
    ];

    const iconsRight = [
        { src: '/images/masterskaya/r1.svg', label: 'Мои языки' },
        { src: '/images/masterskaya/r2.svg', label: 'Рекомендуем' },
        { src: '/images/masterskaya/r3.svg', label: 'Контакты' },
    ];

    return (
        <div className="-mt-22 pb-24">
            <FadeIn>
                <p className="font-helvetica text-2xl font-bold text-white">Мастерская</p>
                <div className="mt-3 flex flex-col gap-4 md:flex-row md:justify-between">
                    
                    <Link to="/AboutPage" className="flex max-h-[90px] w-full cursor-pointer overflow-hidden rounded-[19px] bg-[#1C1C1E] p-[18px] sm:max-h-[110px]">
                        <div className="flex w-full items-center justify-between gap-4">
                            <div className="w-full max-w-[225px]">
                                <p className="font-helvetica mb-1 mb-1.5 text-[18px] leading-none font-bold text-white md:text-[22px]">О проекте Slanglate</p>
                                <p className="font-helvetica text-[12px] leading-none font-normal text-[#9F9F9F] md:text-[14px]">Узнай чуть больше о том, чем ты пользуешься!</p>
                            </div>
                            <div className="mt-[1px] shrink-0 overflow-hidden sm:mt-[11px]">
                                <img src="/images/masterskaya/S.svg" alt="" className="w-[101px] object-cover sm:w-full" />
                            </div>
                        </div>
                    </Link>

                    <div className="flex max-h-[90px] w-full cursor-pointer overflow-hidden rounded-[19px] bg-[#1C1C1E] p-[18px] sm:max-h-[110px]">
                        <div className="flex w-full items-center justify-between gap-4">
                            <div className="mt-[-7px] w-full max-w-[225px]">
                                <p className="font-helvetica mb-1.5 text-[18px] leading-none font-bold text-white md:text-[22px]">Создай свой язык</p>
                                <p className="font-helvetica text-[14px] leading-none text-[#9F9F9F]">Да, вот так просто, единственное ограничение — это твоя фантазия</p>
                            </div>
                            <div className="shrink-0 overflow-hidden">
                                {/* <img src="/images/masterskaya/ng.svg" alt="" className="h-[90px] object-cover md:h-[93px]" /> */}
                                <video autoPlay loop muted playsInline className="h-auto w-[88px] md:w-[120px]" style={{ background: 'transparent' }}>
                                    <source src={`/model/Zumer.webm`} type="video/webm" />
                                    Ваш браузер не поддерживает WebM.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3 flex flex-col gap-4 md:flex-row">
                    <div className="max-w-[440px]">
                        <p
                            className="font-helvetica mt-4 mb-2 font-normal text-[#9F9F9F]"
                            style={{
                                fontSize: '22.858px',
                            }}
                        >
                            Актуальное
                        </p>
                        <div className="m-auto flex flex-wrap gap-6 md:gap-10">
                            {icons.map(({ src, label }) => (
                                <div key={label} className="flex cursor-pointer flex-col items-center text-center">
                                    <div className="flex h-[75.448px] w-[76.928px] shrink-0 rounded-[17.416px] bg-[#1C1C1E] max-[440px]:h-[59px] max-[440px]:w-[60px]">
                                        <img src={src} alt={label} className="m-auto w-16 max-[440px]:h-[34px] max-[440px]:w-[40px]" />
                                    </div>
                                    <p className="mt-2 text-center font-['Helvetica'] text-sm font-normal text-white max-[440px]:text-xs">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ml-0 md:ml-5">
                        <div>
                            <p
                                className="font-helvetica mt-4 mb-2 font-normal text-[#9F9F9F]"
                                style={{
                                    fontSize: '22.858px',
                                }}
                            >
                                Прочее
                            </p>
                            <div className="m-auto flex flex-wrap gap-6 md:gap-10">
                                {iconsRight.map(({ src, label }) => (
                                    <div key={label} className="flex cursor-pointer flex-col items-center text-center">
                                        <div className="flex h-[75.448px] w-[76.928px] shrink-0 rounded-[17.416px] bg-[#1C1C1E] max-[440px]:h-[59px] max-[440px]:w-[60px]">
                                            <img src={src} alt={label} className="m-auto w-16 max-[440px]:h-[34px] max-[440px]:w-[40px]" />
                                        </div>
                                        <p className="mt-2 text-center font-['Helvetica'] text-sm font-normal text-white max-[440px]:text-xs">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

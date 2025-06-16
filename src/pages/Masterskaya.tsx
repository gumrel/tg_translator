import FadeIn from '../UI/FadeIn';

export default function Masterskaya() {
    const icons = [
        { src: '/images/masterskaya/l1.svg', label: 'Русский скуф' },
        { src: '/images/masterskaya/l2.svg', label: 'Аристократ' },
        { src: '/images/masterskaya/l3.svg', label: 'Гопник' },
        { src: '/images/masterskaya/l4.svg', label: 'Зумер' },
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
                    <div className="flex max-h-[380px] w-full overflow-hidden rounded-[19px] bg-[#1C1C1E] p-[18px] lg:max-h-[130px]">
                        <div className="flex w-full items-center justify-between gap-4">
                            <div className="w-full max-w-[225px]">
                                <p className="font-helvetica text-[18px] font-bold text-white md:text-[22px]">О проекте Slanglate</p>
                                <p className="font-helvetica text-[12px] font-normal text-[#9F9F9F] md:text-[14px]">Узнай чуть больше о том, чем ты пользуешься!</p>
                            </div>
                            <div className="shrink-0 overflow-hidden">
                                <img src="/images/masterskaya/S.svg" alt="" className="h-[100px] object-cover md:h-full" />
                            </div>
                        </div>
                    </div>

                    <div className="flex max-h-[380px] w-full overflow-hidden rounded-[19px] bg-[#1C1C1E] p-[18px] lg:max-h-[130px]">
                        <div className="flex w-full items-center justify-between gap-4">
                            <div className="w-full max-w-[225px]">
                                <p className="font-helvetica text-[22px] font-bold text-white">Создай свой язык</p>
                                <p className="font-helvetica text-[14px] font-normal text-[#9F9F9F]">Да, вот так просто, единственное ограничение — это твоя фантазия</p>
                            </div>
                            <div className="shrink-0 overflow-hidden">
                                <img src="/images/masterskaya/ng.svg" alt="" className="h-[90px] object-cover md:h-[93px]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3 flex flex-col gap-4 md:flex-row">
                    <div>
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
                                    <div
                                        className="flex shrink-0 rounded-[17.416px] bg-[#1C1C1E]"
                                        style={{
                                            width: '76.928px',
                                            height: '75.448px',
                                            aspectRatio: '76.93 / 75.45',
                                        }}
                                    >
                                        <img src={src} alt={label} className="m-auto w-16" />
                                    </div>
                                    <p
                                        className="text-center text-white"
                                        style={{
                                            fontSize: '13.5px',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {label}
                                    </p>
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
                                        <div
                                            className="flex shrink-0 rounded-[17.416px] bg-[#1C1C1E]"
                                            style={{
                                                width: '76.928px',
                                                height: '75.448px',
                                                aspectRatio: '76.93 / 75.45',
                                            }}
                                        >
                                            <img src={src} alt={label} className="m-auto w-16" />
                                        </div>
                                        <p
                                            className="text-center text-white"
                                            style={{
                                                fontSize: '13.5px',
                                                fontWeight: 400,
                                            }}
                                        >
                                            {label}
                                        </p>
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

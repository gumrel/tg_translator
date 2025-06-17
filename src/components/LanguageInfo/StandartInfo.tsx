import { Link, useParams } from 'react-router-dom';
import FadeIn from '../../UI/FadeIn';
import './Marquee.css';

export default function StandartInfo() {
    const { itemId } = useParams();

    const icons = [
        { imgName: 'Skuf', label: 'Русский скуф' },
        { imgName: 'Elite', label: 'Аристократ' },
        { imgName: 'Gopnik', label: 'Русский Гопник' },
        { imgName: 'Zumer1', label: 'Русский Зумер' },
        { imgName: 'Zumer', label: 'HOOD' },
    ];

    const currentLang = icons.find((item) => item.imgName === itemId);

    return (
        <div className="-mt-20">
            <FadeIn>
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <Link className="!font-bold" to="/">
                                <img src="/images/SLANGLATE.svg" alt="" style={{ width: '75px', height: '35px' }} />
                            </Link>
                        </div>
                        <div className="flex gap-x-4">
                            <div className="flex gap-x-4">
                                <div>
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white pb-1 text-xl font-normal text-black">ru</div>
                                </div>
                            </div>
                            <Link to="/Library">
                                <img src="/images/close.svg" alt="" className="mt-1.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative mt-8 flex flex-col items-center">
                    <div className="relative z-10 w-full max-w-[231px]">
                        <video autoPlay loop muted playsInline className="h-auto w-full">
                            <source src={`/model/${currentLang?.imgName}.webm`} type="video/webm" />
                            Ваш браузер не поддерживает WebM.
                        </video>
                    </div>

                    {currentLang && (
                        <div className="absolute top-0 right-0 left-0 z-0 flex h-full w-full flex-col justify-center">
                            {/* Первая строка (влево) */}
                            <div className="marquee-container">
                                <div className="marquee-content">
                                    {[...Array(12)].map((_, i) => (
                                        <span key={`left-${i}`} className="marquee-item">
                                            {currentLang.label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Вторая строка (вправо) */}
                            <div className="marquee-container mt-2">
                                <div className="marquee-content-right">
                                    {[...Array(12)].map((_, i) => (
                                        <span key={`right-${i}`} className="marquee-item">
                                            {currentLang.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </FadeIn>
        </div>
    );
}

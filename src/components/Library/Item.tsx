import { useNavigate } from 'react-router-dom';
import FadeIn from '../../UI/FadeIn';
import { useEffect, useRef } from 'react';

interface IProps {
    imgName: string;
    naming: string;
    onReady: () => void;
    setVideoRef: (el: HTMLVideoElement) => void;
}

export default function Item({ imgName, naming, onReady, setVideoRef }: IProps) {
    const navigate = useNavigate();
    const ref = useRef<HTMLVideoElement | null>(null);

    const goTo = () => {
        navigate(`/StandartInfo/${imgName}`);
    };

    useEffect(() => {
        const video = ref.current;
        if (!video) return;

        const handleCanPlayThrough = () => onReady();

        video.addEventListener('canplaythrough', handleCanPlayThrough);
        setVideoRef(video);

        return () => {
            video.removeEventListener('canplaythrough', handleCanPlayThrough);
        };
    }, []);

    return (
        <div>
            <FadeIn>
                <div onClick={goTo} className="relative flex min-h-[190px] w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-black p-5 text-white md:flex-row">
                    <div className="pointer-events-none absolute top-1/3 right-0 z-0 mt-3 mr-3 -translate-y-1/2">
                        <video
                            ref={ref}
                            src={`/model/${imgName}.webm`}
                            muted
                            loop
                            preload="auto"
                            playsInline
                            style={{ width: '128px', height: 'auto', background: 'transparent' }}
                        />
                    </div>

                    <div className="relative z-10 mt-8 flex flex-col">
                        <p
                            style={{
                                color: 'white',
                                fontSize: 38,
                                fontFamily: 'Helvetica',
                                fontWeight: '700',
                                lineHeight: '32px',
                                wordWrap: 'break-word',
                                textTransform: 'uppercase',
                                maxWidth: '270px',
                            }}
                        >
                            {naming}
                        </p>
                    </div>

                    <div className="absolute right-5 bottom-5 left-5">
                        <div className="relative flex justify-between">
                            <p className="text-sm font-extralight" style={{ fontFamily: 'Arimo' }}>
                                Nigger
                            </p>
                            <img src="/images/open.svg" alt="" className="absolute right-0 bottom-0" style={{ width: '24px', height: '24px' }} />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

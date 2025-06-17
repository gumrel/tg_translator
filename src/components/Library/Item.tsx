import FadeIn from '../../UI/FadeIn';

type ItemProps = {
    imgName: string;
    naming: string;
};

export default function Item({ imgName, naming }: ItemProps) {
    return (
        <div>
            <FadeIn>
                <div className="relative flex min-h-[190px] w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-black p-5 text-white md:flex-row">
                    <div className="pointer-events-none absolute top-1/3 right-0 z-0 mt-3 mr-3 -translate-y-1/2">
                        <video autoPlay loop muted playsInline style={{ width: '128px', height: 'auto' }}>
                            <source src={`/model/${imgName}.webm`} type="video/webm" />
                            Ваш браузер не поддерживает WebM.
                        </video>
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

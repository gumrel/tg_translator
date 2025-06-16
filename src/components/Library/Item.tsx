import FadeIn from '../../UI/FadeIn';
// import { Link } from 'react-router-dom';

type ItemProps = {
    imgName: string;
    naming: string;
};

export default function Item({ imgName, naming }: ItemProps) {
    return (
        <div>
            <FadeIn>
                <div className="rounded-2xl bg-[#000000] p-5 text-white md:w-[435px]">
                    <div className="flex items-center justify-between">
                        <h2 className="mr-3 max-w-[200px] self-center break-all">{naming}</h2>
                        <div className="shrink-0">
                            <div style={{ maxWidth: '128px', maxHeight: '98px', margin: '0 auto' }}>
                                <video autoPlay loop muted playsInline style={{ width: '100%', height: 'auto' }}>
                                    <source src={`/model/${imgName}.webm`} type="video/webm" />
                                    Ваш браузер не поддерживает WebM.
                                </video>
                            </div>
                        </div>
                    </div>

                    <p style={{ fontFamily: 'Arimo' }} className="mt-3 font-sans text-sm font-extralight">
                        nigger
                    </p>
                </div>
            </FadeIn>
        </div>
    );
}

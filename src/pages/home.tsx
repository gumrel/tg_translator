import FadeIn from '../UI/FadeIn';
import BaseButton from '../UI/BaseButton';

import CustomTextArea from '../UI/CustomTextArea';
import { useUtilsStore } from '../services/store/utilsStore';
import { Link } from 'react-router-dom';

export default function Home() {
    const { leftLanguage, rightLanguage, changeLanguage, setSelectedLanguage } = useUtilsStore();

    return (
        <>
            <FadeIn>
                <div className="-mt-24">
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-between">
                        <Link
                            to="/SelectLanguage"
                            onClick={() => {
                                setSelectedLanguage(-1);
                                console.log('-1');
                            }}
                            className="mb-3 flex min-w-[120px] flex-1 cursor-pointer items-center justify-center rounded-xl bg-[#202020] p-3 text-center text-xl"
                        >
                            <p>{leftLanguage}</p>
                        </Link>

                        <div className="mb-2 cursor-pointer">
                            <img onClick={changeLanguage} src="/images/arrow.svg" alt="" />
                        </div>

                        <Link
                            to="/SelectLanguage"
                            onClick={() => {
                                setSelectedLanguage(1);
                                console.log('1');
                            }}
                            className="mb-3 flex min-w-[120px] flex-1 cursor-pointer items-center justify-center rounded-xl bg-[#202020] p-3 text-center text-xl"
                        >
                            <p>{rightLanguage}</p>
                        </Link>
                    </div>

                    <CustomTextArea />

                    <div className="mt-5">
                        <BaseButton>Перевод</BaseButton>
                    </div>
                </div>
            </FadeIn>
        </>
    );
}

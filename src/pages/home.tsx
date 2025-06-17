import FadeIn from '../UI/FadeIn';
import BaseButton from '../UI/BaseButton';

import CustomTextArea from '../UI/CustomTextArea';
import { useUtilsStore } from '../services/store/utilsStore';
import { Link } from 'react-router-dom';

export default function Home() {
    const { leftLanguage, rightLanguage, setSelectedLanguage } = useUtilsStore();

    return (
        <>
            <FadeIn>
                <div className="-mt-24">
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-between">
                        <div
                            // to="/SelectLanguage"
                            // onClick={() => {
                            //     setSelectedLanguage(-1);
                            // }}
                            className="mb-3 flex min-w-[120px] flex-1 cursor-pointer items-center justify-center rounded-xl bg-[#202020] p-3 text-center text-xl"
                        >
                            <p>{leftLanguage}</p>
                        </div>

                        <div className="mb-2 cursor-pointer">
                            {/* <img onClick={changeLanguage} src="/images/arrow.svg" alt="" /> */}
                            <img className="w-7" src="/images/arrow-right.svg" alt="arrow" />
                        </div>

                        <Link
                            to="/SelectLanguage"
                            onClick={() => {
                                setSelectedLanguage(1);
                            }}
                            className="mb-3 flex min-w-[120px] flex-1 cursor-pointer items-center justify-center rounded-xl bg-[#202020] p-3 text-center text-xl"
                        >
                            <p>{rightLanguage.name}</p>
                        </Link>
                    </div>

                    <CustomTextArea />

                    <div className="mt-5">
                        <BaseButton>Перевод: {rightLanguage.description}</BaseButton>
                    </div>
                </div>
            </FadeIn>
        </>
    );
}

import FadeIn from '../UI/FadeIn';
import BaseButton from '../UI/BaseButton';

import CustomTextArea from '../UI/CustomTextArea';
import { useUtilsStore } from '../services/store/utilsStore';

export default function Home() {
    const { leftLanguage, rightLanguage, changeLanguage, setLanguageOpen } = useUtilsStore();

    return (
        <>
            <FadeIn>
                <div className="-mt-24">
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-between">
                        <div onClick={() => setLanguageOpen(true)} className="mb-3 flex min-w-[120px] flex-1 items-center justify-center rounded-xl bg-[#202020] p-3 text-center">
                            <p className="cursor-pointer text-xl">{leftLanguage}</p>
                        </div>

                        <div className="mb-2 cursor-pointer">
                            <img onClick={changeLanguage} src="/images/arrow.svg" alt="" />
                        </div>

                        <div className="mb-3 flex min-w-[120px] flex-1 items-center justify-center rounded-xl bg-[#202020] p-3 text-center">
                            <p className="cursor-pointer text-xl">{rightLanguage}</p>
                        </div>
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

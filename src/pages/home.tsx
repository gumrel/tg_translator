import FadeIn from '../UI/FadeIn';
import BaseButton from '../UI/BaseButton';

import CustomTextArea from '../UI/CustomTextArea';
import { useUtilsStore } from '../services/store/utilsStore';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import { login } from '../api/auth/auth.api';

export default function Home() {
    const { leftLanguage, rightLanguage, changeLanguage, setSelectedLanguage } = useUtilsStore();

    // const AuthInit = () => {
    // useEffect(() => {
    const doLogin = async () => {
        try {
            // const initData = window.Telegram?.WebApp?.initData;
            const initData = '7131153888:AAE72EC_DrC2SapcZuo0uD5viC6xy8gv7cs';

            if (!initData) {
                console.error('хуйня невалидная');
                return;
            }

            const userData = await login({ initData });

            console.log(userData.user);
        } catch (error) {
            console.error(error);
        }
    };

    //     doLogin();
    // }, []);

    //     return <div>Загрузка...</div>;
    // };

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
                        <BaseButton onClick={doLogin}>Перевод</BaseButton>
                    </div>
                </div>
            </FadeIn>
        </>
    );
}

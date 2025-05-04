import { useState, useEffect } from 'react';
import FadeIn from '../UI/FadeIn';
import Empty from '../components/Empty/Empty';
import TranslateItem from '../components/GridMenu/TranslateItem';
import { useHistoryStore } from '../services/store/useHistoryStore';
import { getTranslation } from '../api/translation/translation.api';

export default function HistoryTranslate() {
    const { clearHistory, history, loadHistoryFromStorage } = useHistoryStore();

    const [hasTranslate, setHasTranslate] = useState<boolean>(false);

    useEffect(() => {
        loadHistoryFromStorage();
    }, [loadHistoryFromStorage]);

    useEffect(() => {
        setHasTranslate(Array.isArray(history) && history.length > 0);
    }, [history]);

    useEffect(() => {
        const doLanguage = async () => {
            try {
                const userData = await getTranslation();
                console.log(userData.user);
            } catch (error) {
                console.error(error);
            }
        };

        doLanguage();
    }, []);

    return (
        <FadeIn>
            <div className="-mt-20">
                <div className="flex justify-between">
                    <p className="mb-5 text-xl font-bold">Очистить историю</p>
                    <img onClick={() => clearHistory()} className="mb-4 w-7 cursor-pointer" src="/images/Icon_Delete.svg" alt="img" />
                </div>

                <div className="my-3 h-[1px] self-center bg-[#787878]" />
                {hasTranslate ? (
                    <>
                        {history.map((item, index) => (
                            <TranslateItem
                                key={index}
                                leftLanguage={item.leftLanguage}
                                rightLanguage={item.rightLanguage}
                                leftTranslate={item.leftTranslate}
                                rightTranslate={item.rightTranslate}
                            />
                        ))}
                    </>
                ) : (
                    <Empty />
                )}
            </div>
        </FadeIn>
    );
}

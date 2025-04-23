import FadeIn from '../UI/FadeIn';

import { mokSaved } from '../services/constants';
import Empty from '../components/Empty/Empty';
import TranslateItem from '../components/GridMenu/TranslateItem';

export default function HistoryTranslate() {
    const hasTranslate = Array.isArray(mokSaved) && mokSaved.length > 0;

    return (
        <FadeIn>
            <div className="-mt-20">
                <div className="flex justify-between">
                    <p className="mb-5 text-xl font-semibold">Очистить историю</p>
                    <img className="mb-4 w-7 cursor-pointer" src="/images/Icon_Delete.svg" alt="img" />
                </div>

                <div className="my-3 h-[1px] self-center bg-[#787878]" />
                {hasTranslate ? (
                    <>
                        {mokSaved.map((item, index) => (
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

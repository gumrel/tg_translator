import FadeIn from '../UI/FadeIn';

import { mokSaved } from '../services/constants';
import Empty from '../components/Empty/Empty';
import TranslateItem from '../components/GridMenu/TranslateItem';

export default function SavedTranslate() {
    const hasTranslate = Array.isArray(mokSaved) && mokSaved.length > 0;

    return (
        <FadeIn>
            <div className="-mt-20">
                <p className="mb-5 text-xl font-bold">Избранное</p>

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

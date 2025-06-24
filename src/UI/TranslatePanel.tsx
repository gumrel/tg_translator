import { useState } from 'react';
import HistoryTranslate from '../pages/HistoryTranslate';
import SavedTranslate from '../pages/SavedTranslate';

// type TranslatePanelProps = {
//     onClose: () => void;
// };

const TranslatePanel = () => {
    const [view, setView] = useState<'history' | 'likes'>('history');

    return (
        <div className="fixed top-[271px] right-0 z-50 max-h-[350px] min-h-[350px] w-[330px] -translate-y-1/2 overflow-y-auto rounded-[19px] border border-neutral-800 bg-black p-4 text-xl text-white shadow-xl">
            <div className="flex justify-center gap-6">
                <button className={`rounded px-3 py-1 ${view === 'history' ? 'bg-gray-700' : 'bg-transparent'}`} onClick={() => setView('history')}>
                    История
                </button>
                <button className={`rounded px-3 py-1 ${view === 'likes' ? 'bg-gray-700' : 'bg-transparent'}`} onClick={() => setView('likes')}>
                    Избранное
                </button>
            </div>

            <div className="overflow-y-auto pt-22">{view === 'history' ? <HistoryTranslate /> : <SavedTranslate />}</div>
        </div>
    );
};

export default TranslatePanel;

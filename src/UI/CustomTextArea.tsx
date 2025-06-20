import { useCallback, useState } from 'react';
import { useHistoryStore } from '../services/store/useHistoryStore';
import { useUtilsStore } from '../services/store/utilsStore';
import { debounce } from 'lodash';
import { makeTransation } from '../api/default/default.api';
import { saveTransation } from '../api/translation/translation.api';

export default function CustomTextArea() {
    const { wordToTranslate, setWordToTranslate, translated, setTranslated, addToHistory } = useHistoryStore();
    const { leftLanguage, rightLanguage } = useUtilsStore();

    const [isLoading, setIsLoading] = useState(false);
    // const [isRecording, setIsRecording] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const debouncedTranslate = useCallback(
        debounce((text: string) => {
            setIsLiked(false);
            setIsLoading(true);
            setTranslated('');

            setTimeout(async () => {
                try {
                    const response = await makeTransation({ languageId: rightLanguage.id, text });
                    const translatedText = response.translatedText;

                    setTranslated(translatedText);

                    addToHistory({
                        leftLanguage: leftLanguage,
                        rightLanguage: rightLanguage.name,
                        leftTranslate: text,
                        rightTranslate: translatedText,
                        isLiked: false,
                    });
                } catch (error) {
                    console.error('Ошибка перевода:', error);
                } finally {
                    setIsLoading(false);
                }
            }, 1500);
        }, 500),
        [rightLanguage.id, leftLanguage, rightLanguage.name],
    );

    const likeTranslate = () => {
        saveTransation({
            languageId: rightLanguage.id,
            srcText: wordToTranslate,
            translationText: translated,
        });
        setIsLiked(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setWordToTranslate(value);
        debouncedTranslate(value);
    };

    const handleClear = () => {
        setIsLiked(false);
        setWordToTranslate('');
        setTranslated('');
    };

    const handleCopy = () => {
        if (translated) {
            navigator.clipboard
                .writeText(translated)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                })
                .catch((err) => {
                    console.error('Ошибка при копировании: ', err);
                });
        }
    };

    const handleSpeak = () => {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        if (translated) {
            const utterance = new SpeechSynthesisUtterance(translated);
            utterance.lang = 'ru-RU';
            speechSynthesis.speak(utterance);
        }
    };

    // const handleVoiceInput = () => {
    //     const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    //     if (!SpeechRecognition) {
    //         alert('Распознавание речи не поддерживается в этом браузере.');
    //         return;
    //     }

    //     const recognition = new SpeechRecognition();
    //     recognition.lang = 'ru-RU';
    //     recognition.interimResults = false;
    //     recognition.maxAlternatives = 1;

    //     setIsRecording(true);
    //     recognition.start();

    //     recognition.onresult = (event: any) => {
    //         const speechToText = event.results[0][0].transcript;
    //         setWordToTranslate(speechToText);
    //         debouncedTranslate(speechToText);
    //         setIsRecording(false);
    //     };

    //     recognition.onerror = (event: any) => {
    //         console.error('Ошибка распознавания речи:', event.error);
    //         setIsRecording(false);
    //     };

    //     recognition.onend = () => {
    //         setIsRecording(false);
    //     };
    // };

    return (
        <div className="flex min-h-[351px] flex-col gap-4 rounded-3xl p-4 backdrop-blur-md">
            {copied && (
                <div className="absolute top-2 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-green-600 px-4 py-2 text-white shadow-lg transition-opacity duration-300">
                    Скопировано!
                </div>
            )}

            <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                    <img onClick={handleClear} className="absolute top-4 right-2 w-6 cursor-pointer" src="/images/miniUI/del.png" alt="Очистить" />

                    <textarea
                        value={wordToTranslate}
                        onChange={handleChange}
                        placeholder="Введите текст"
                        className="min-h-[130px] w-full resize-none rounded-3xl bg-[#0C0C0C] p-4 text-xl text-black outline-none dark:text-white"
                    />
                </div>

                <div className="relative min-h-[350px] flex-1 rounded-[29px] bg-black p-4 text-xl break-words text-white">
                    <div className="absolute top-4 right-4 flex gap-3">
                        <img onClick={handleCopy} className="w-[22px] cursor-pointer" src="/images/miniUI/Copy.svg" alt="Копировать" />
                        {!isLiked ? (
                            <img onClick={likeTranslate} className="w-[22px] cursor-pointer" src="/images/miniUI/Like.svg" alt="Лайк" />
                        ) : (
                            <img src="/images/Save.svg" className="w-[22px]" alt="Сохранено" />
                        )}
                        <img onClick={handleSpeak} className="w-[22px] cursor-pointer" src="/images/miniUI/Sound.svg" alt="Озвучить" />
                    </div>

                    {isLoading ? <span className="animate-pulse text-white">Переводим...</span> : translated || <span className="text-zinc-400">Введите текст</span>}
                </div>
            </div>
        </div>
    );
}

import { useCallback, useState } from 'react';
import { useHistoryStore } from '../services/store/useHistoryStore';
import { useUtilsStore } from '../services/store/utilsStore';
import { debounce } from 'lodash';

export default function CustomTextArea() {
    const { wordToTranslate, setWordToTranslate, translated, setTranslated, addToHistory } = useHistoryStore();
    const { leftLanguage, rightLanguage } = useUtilsStore();

    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [copied, setCopied] = useState(false);

    const debouncedTranslate = useCallback(
        debounce((text: string) => {
            setIsLoading(true);
            setTranslated('');

            setTimeout(() => {
                setTranslated(`${text.split('').reverse().join('')}`);
                setIsLoading(false);
                addToHistory({
                    leftLanguage: leftLanguage,
                    rightLanguage: rightLanguage,
                    leftTranslate: text,
                    rightTranslate: 'fj',
                    isLiked: false,
                });
            }, 1500);
        }, 500),
        [],
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setWordToTranslate(value);
        debouncedTranslate(value);
    };

    const handleClear = () => {
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

    const handleVoiceInput = () => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert('Распознавание речи не поддерживается в этом браузере.');
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'ru-RU';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        setIsRecording(true);
        recognition.start();

        recognition.onresult = (event: any) => {
            const speechToText = event.results[0][0].transcript;
            setWordToTranslate(speechToText);
            debouncedTranslate(speechToText);
            setIsRecording(false);
        };

        recognition.onerror = (event: any) => {
            console.error('Ошибка распознавания речи:', event.error);
            setIsRecording(false);
        };

        recognition.onend = () => {
            setIsRecording(false);
        };
    };

    return (
        <div className="flex flex-col gap-4 rounded-3xl bg-[#202020] p-4 backdrop-blur-md">
            {copied && (
                <div className="absolute top-2 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-green-600 px-4 py-2 text-white shadow-lg transition-opacity duration-300">
                    Скопировано!
                </div>
            )}

            <div className="relative">
                <textarea
                    value={wordToTranslate}
                    onChange={handleChange}
                    placeholder={isRecording ? 'Говорите...' : 'Введите текст...'}
                    className="min-h-[130px] w-full resize-none rounded-3xl bg-[#202020] p-4 text-xl text-black outline-none dark:text-white"
                />
                {!wordToTranslate.length ? (
                    <img onClick={handleVoiceInput} className="absolute top-4 right-4 w-7 cursor-pointer" src="/images/miniUI/mic.svg" alt="Микрофон" />
                ) : null}
            </div>

            <div className="my-3 h-[1px] w-[95%] self-center bg-[#787878]" />

            <div className="min-h-[130px] rounded-3xl bg-[#202020] p-4 text-xl break-all text-black dark:text-white">
                {isLoading ? <span className="animate-pulse text-white">Переводим...</span> : translated || <span className="text-zinc-400"></span>}
            </div>

            <div className="mb-2 flex justify-between px-3">
                <div className="wrap flex gap-3">
                    <img onClick={() => handleCopy()} className="w-7 cursor-pointer" src="/images/miniUI/Copy.svg" alt="img" />
                    <img className="w-7 cursor-pointer" src="/images/miniUI/Like.svg" alt="img" />
                    <img onClick={() => handleSpeak()} className="w-7 cursor-pointer" src="/images/miniUI/Sound.svg" alt="img" />
                </div>
                <img onClick={() => handleClear()} className="w-7 cursor-pointer" src="/images/miniUI/Delete.svg" alt="img" />
            </div>
        </div>
    );
}

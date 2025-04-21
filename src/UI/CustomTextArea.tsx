import { useState } from 'react';

export default function CustomTextArea() {
    const [input, setInput] = useState('');
    const [translated, setTranslated] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleTranslate = async (text: string) => {
        setIsLoading(true);
        setTranslated('');

        setTimeout(() => {
            setTranslated(`🔁 Перевод: ${text.split('').reverse().join('')}`);
            setIsLoading(false);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setInput(value);
        handleTranslate(value);
    };

    return (
        <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-md dark:bg-[#20202380]">
            <textarea
                value={input}
                onChange={handleChange}
                placeholder="Введите текст..."
                className="min-h-[120px] resize-none rounded-xl border border-zinc-300 bg-white p-4 text-sm text-black outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />

            <div className="min-h-[80px] rounded-xl border border-dashed border-zinc-300 bg-white/60 p-4 text-sm text-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white">
                {isLoading ? <span className="animate-pulse text-zinc-500">Переводим...</span> : translated || <span className="text-zinc-400">Здесь появится перевод</span>}
            </div>
        </div>
    );
}

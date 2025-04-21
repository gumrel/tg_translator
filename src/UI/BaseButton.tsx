import React from 'react';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...props }) => {
    return (
        <button
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 transition-all duration-200 ease-in-out active:scale-95 dark:bg-white dark:text-gray-800"
            {...props}
        >
            {children}
        </button>
    );
};

export default BaseButton;

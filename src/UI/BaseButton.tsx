import React from 'react';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...props }) => {
    return (
        <button
            className="flex items-center justify-center gap-2 rounded-lg bg-[rgb(38,196,177)] px-5 py-2 font-semibold transition-all duration-200 ease-in-out hover:bg-[rgb(30,170,153)] active:scale-95 dark:bg-[rgb(150,230,220)] dark:text-gray-800 dark:hover:bg-[rgb(120,200,190)]"
            {...props}
        >
            {children}
        </button>
    );
};

export default BaseButton;

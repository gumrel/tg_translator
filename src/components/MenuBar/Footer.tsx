import { Link } from 'react-router-dom';

// import FadeIn from '../../UI/FadeIn';

const footerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Footer() {
    return (
        <footer className="fixed bottom-0 z-100 w-full rounded-3xl bg-black px-0 sm:px-5">
            <div aria-label="Footer" className="flex max-h-[82px] justify-center p-5" {...footerAnimation}>
                <div className="flex w-full items-center justify-center sm:gap-[60px] gap-[45px]">
                    <Link to="/Library" className="flex max-h-[55px] flex-col items-center text-center sm:text-[16px] text-[12px] font-bold text-[#919191]">
                        <img src="/images/lib.png" alt="Library"  className='sm:w-[35px] w-[24px]'  />
                        Библиотека
                    </Link>

                    <Link to="/" className="flex max-h-[55px] flex-col items-center text-center sm:text-[16px] text-[12px] font-bold text-[#919191]">
                        <img src="/images/trans.png" alt="Translator" className='sm:w-[35px] w-[24px]' />
                        Переводчик
                    </Link>

                    <Link to="/Masterskaya" className="flex max-h-[55px] flex-col items-center text-center sm:text-[16px] text-[12px] font-bold text-[#919191]">
                        <img src="/images/master.png" alt="Masterskaya" className='sm:w-[35px] w-[24px]' />
                        Мастерская
                    </Link>
                </div>
            </div>
        </footer>
    );
}

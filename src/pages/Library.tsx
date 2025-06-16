import BaseInput from '../UI/BaseInput';
import FadeIn from '../UI/FadeIn';
// import { Link } from 'react-router-dom';
import Item from '../components/Library/Item';

export default function Library() {
    const icons = [
        { imgName: 'Skuf', label: 'Русский скуф' },
        { imgName: 'Elite', label: 'Аристократ' },
        { imgName: 'Gopnik', label: 'Гопник' },
        { imgName: 'Zumer1', label: 'Зумер' },
        { imgName: 'Zumer', label: 'HOOD' },
    ];

    return (
        <div className="-mt-30">
            <FadeIn>
                <div className="mt-6">
                    <BaseInput />

                    <div className="mt-3 flex flex-wrap gap-3">
                        <div className="font-helvetica flex h-[35px] w-[168px] flex-shrink-0 items-center justify-center gap-[10px] rounded-[31px] bg-[#171717] px-[15px] py-[15px] text-center text-xs text-[12px] leading-[100%] font-normal tracking-[-0.12px] text-white">
                            Стандартные
                        </div>
                        <div className="font-helvetica flex h-[35px] w-[168px] flex-shrink-0 items-center justify-center gap-[10px] rounded-[31px] bg-[#171717] px-[15px] py-[15px] text-center text-xs text-[12px] leading-[100%] font-normal tracking-[-0.12px] text-white">
                            Мастерская
                        </div>
                        <div className="font-helvetica flex h-[35px] w-[168px] flex-shrink-0 items-center justify-center gap-[10px] rounded-[31px] bg-[#171717] px-[15px] py-[15px] text-center text-xs text-[12px] leading-[100%] font-normal tracking-[-0.12px] text-white">
                            Избранное
                        </div>
                        <div className="font-helvetica flex h-[35px] w-[168px] flex-shrink-0 items-center justify-center gap-[10px] rounded-[31px] bg-[#171717] px-[15px] py-[15px] text-center text-xs text-[12px] leading-[100%] font-normal tracking-[-0.12px] text-white">
                            В тренде
                        </div>
                        <div className="font-helvetica flex h-[35px] w-[168px] flex-shrink-0 items-center justify-center gap-[10px] rounded-[31px] bg-[#171717] px-[15px] py-[15px] text-center text-xs text-[12px] leading-[100%] font-normal tracking-[-0.12px] text-white">
                            Новые
                        </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-5">
                        {icons.map((item, index) => (
                            <Item key={index} imgName={item.imgName} naming={item.label} />
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

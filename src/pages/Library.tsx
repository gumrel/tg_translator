import BaseInput from '../UI/BaseInput';
import FadeIn from '../UI/FadeIn';
import { Link } from 'react-router-dom';
import Item from '../components/Library/Item';

export default function Library() {
    return (
        <div className="-mt-30">
            <FadeIn>
                <div className="mt-8">
                    <BaseInput />

                    <div className="mt-5 flex flex-wrap justify-between gap-5">
                        <div className="flex-grow cursor-pointer rounded-3xl bg-[#171717] px-16 py-3 text-center sm:w-auto">Стандартные</div>

                        <Link className="flex-grow cursor-pointer rounded-3xl bg-[#171717] px-16 py-3 text-center sm:w-auto" to="/Masterskaya">
                            <p>Мастерская</p>
                        </Link>
                    </div>

                    <div>
                        <Item />
                        <Item />

                        <Item />
                        <Item />
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

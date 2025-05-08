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

                    <div className="mt-3 flex gap-5">
                        <div className="flex-1 cursor-pointer rounded-3xl bg-[#171717] py-3 text-center text-xs">Стандартные</div>

                        <Link className="flex flex-1 cursor-pointer items-center justify-center rounded-3xl bg-[#171717] py-3 text-center text-xs" to="/Masterskaya">
                            Пользовательские
                        </Link>
                    </div>

                    <div>
                        <Item item={1} />
                        <Item item={2} />

                        <Item item={3} />
                        <Item item={4} />
                        <Item item={5} />
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

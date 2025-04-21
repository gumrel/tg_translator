import { Component } from 'react';
import FadeIn from '../UI/FadeIn';
import Shuffle from '../components/shuffle';

export default class Skills extends Component {
    render() {
        return (
            <div className="-mt-30">
                <FadeIn>
                    <div>
                        <h3 className="my-10 text-left text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8">My technology</h3>

                        <Shuffle />
                    </div>
                </FadeIn>
            </div>
        );
    }
}

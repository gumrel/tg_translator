import { Component } from 'react';
import FadeIn from '../UI/FadeIn';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
            <div className="-mt-30">
                <FadeIn>
                    <div>
                        <h3 className="my-10 text-left text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8">Get in Touch</h3>

                        <div className="text-xl">
                            <p>Do you have a project you want to implement? I am ready to help you with it! You can contact me and I will try to answer as soon as possible.</p>
                            <p className="mt-6">
                                You can reach me by emailing me at <label className="text-pink-400 underline underline-offset-4">g0nte4449@gmail.com</label> or write in{' '}
                                <Link className="text-pink-400 underline underline-offset-4" to="https://t.me/maks_kich" target="_blank">
                                    Telegram
                                </Link>
                                . I usually respond within 2 business days.
                            </p>
                            <p className="mt-6">
                                Check out my{' '}
                                <Link className="text-pink-400 underline underline-offset-4" to="/works">
                                    portfolio
                                </Link>{' '}
                                to see my work and learn more about my experience.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        );
    }
}

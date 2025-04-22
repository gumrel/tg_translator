import { Component } from 'react';
import FadeIn from '../UI/FadeIn';
import { Link } from 'react-router-dom';
import Empty from '../components/Empty/Empty';

export default class Contact extends Component {
    render() {
        return (
            <div className="-mt-30">
                <FadeIn>
                    <div>
                        <Empty />
                    </div>
                </FadeIn>
            </div>
        );
    }
}

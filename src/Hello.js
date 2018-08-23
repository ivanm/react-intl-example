import React from 'react';
import { injectIntl, defineMessages } from 'react-intl';

class Hello extends React.Component {

    constructor(props) {
        super(props);
        // Messages defined on the component
        this.messages = defineMessages({
            salute: {
                id: 'salute',
                description: 'A salute for the user'
            },
            now: {
                id: 'now',
                description: 'The current date'
            },
            cats: {
                id: 'cats',
                description: 'The number of cats I have'
            }
        });
    }

    render() {
        return (
            <div>
                <div>
                    { this.props.intl.formatMessage(this.messages.salute, {name: 'Michael'}) }
                </div>
                <div>
                    { this.props.intl.formatMessage(this.messages.now) } { this.props.intl.formatDate(Date.now(), {day:'numeric', month:'long', year:'numeric'}) }
                </div>
                <div>
                    { this.props.intl.formatMessage(this.messages.cats, {count: this.props.intl.formatNumber(1000)}) }
                </div>
            </div>
        );
    }
}

// We need to inject the the intl functions, so we can use this.props.intl
export default injectIntl(Hello);

import React from 'react';
import { injectIntl, defineMessages } from 'react-intl';

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.messages = defineMessages({
            salute: {
                id: 'salute'
            }
        });
    }

    render() {
      return (
          <div>
            { this.props.intl.formatMessage(this.messages.salute) }
          </div>
        );
    }
}

export default injectIntl(Hello);

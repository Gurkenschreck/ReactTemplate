// This is an example of a representational component

import React from 'react';

class Example extends React.Component {
    render() {
        return (
            <div>Hello, {this.props.greetTo}!</div>
        );
    }
}

Example.propTypes = {
    greetTo: React.PropTypes.string
};

Example.defaultProps = {
    greetTo: "World"
};

// And so on

export default Example;
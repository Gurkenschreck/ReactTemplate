import React from 'react';
import { connect } from 'react-redux';

export class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        setInterval(() => {
            this.setState({counter: this.state.counter+1});
        }, 1000);
    }

    render(){
        return(
            <div className="greeting">
                Hello World!
                {this.state.counter}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const ConnectedGreeting = connect(mapStateToProps, mapDispatchToProps)(Greeting);

export default ConnectedGreeting;
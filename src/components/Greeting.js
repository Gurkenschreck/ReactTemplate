import React from 'react';
import { connect } from 'react-redux';

export class Greeting extends React.Component {
    render(){
        return(
            <div>
                Hello World!
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
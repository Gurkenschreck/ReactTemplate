import React from 'react';
import { connect } from 'react-redux';

if(process.env.BROWSER){
    require('./Greeting.css');
}

export class Greeting extends React.Component {
    render(){
        return(
            <div className="greeting">
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
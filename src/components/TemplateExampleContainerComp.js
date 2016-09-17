// This is an example of a pure container component

import React from 'react';
import { connect } from 'react-redux';

import ExampleRepresentational from '../rep-comp';

// Apply state changes to the properties
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const ConnectedExample = connect(mapStateToProps, mapDispatchToProps)(ExampleRepresentational);

export default ConnectedExample;
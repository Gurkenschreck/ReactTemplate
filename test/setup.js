require('ignore-styles');

var jsdom = require('jsdom').jsdom;
var expect = require('expect');
var React = require('react');
var {mount, render, shallow} = require('enzyme');
var deepFreeze = require('deep-freeze-node');

global.document = jsdom('');
global.window = document.defaultView;
global.expect = expect;
global.React = React;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.deepFreeze = deepFreeze;

var exposedProperties = ['window', 'navigator', 'document'];

Object.keys(document.defaultView).forEach(function(property){
    if(typeof global[property] === 'undefined'){
        exposedProperties.push(property);
        global[property] = document.defaultView;
    }
});

global.navigator = {
    userAgent: 'node.js'
};

var documentRef = document;
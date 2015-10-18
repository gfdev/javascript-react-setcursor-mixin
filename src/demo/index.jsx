var React = require('react')
    , setCursorMixin = require('../setCursorMixin')
;

require('./index.scss');

var Index = React.createClass({
    mixins: [
        setCursorMixin
    ],
    //propTypes: {},
    //statics: {},
    //displayName: 'Test',

    //getInitialState: function() {},
    //getDefaultProps: function () {},

    //componentWillMount: function () {},
    //componentDidMount: function () {},

    //componentWillReceiveProps: function () {},
    //shouldComponentUpdate: function () {},
    //componentWillUpdate: function () {},
    //componentDidUpdate: function () {},

    //componentWillUnmount: function () {},

    //setCursor: function(e) {
    //    console.log(e);
    //},
    render: function() {
        return (
            <div>
                Focus: <input type='text' data-focus /><br /><br />

                <input ref='input1' type='text' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input1', -1)}>Set cursor to end of text</button>
                <br /><br />
                <input ref='input2' type='password' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input2', -1)}>Set cursor to end of text</button>
                <br /><br />
                <input ref='input3' type='search' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input3', -1)}>Set cursor to end of text</button>
                <br /><br />
                <input ref='input4' type='tel' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input4', -1)}>Set cursor to end of text</button>
                <br /><br />
                <input ref='input5' type='url' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input5', -1)}>Set cursor to end of text</button>
                <br /><br />

                <textarea ref='textarea1' defaultValue='afgdgf sdfgsdfgsd sdfgdsfgsdfg sdfgsdfg jhgjg' />
                <button onClick={this.setCursor.bind(null, 'textarea1', 3)}>Set cursor to end of text</button>
            </div>
        );
    }
});

React.render(<Index />, document.getElementById('body'));

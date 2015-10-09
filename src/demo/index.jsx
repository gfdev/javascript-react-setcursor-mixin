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

    render: function() {
        return (
            <div>
                Focus: <input type='text' defaultValue='1234567890' data-focus /><br />

                <input type='text' defaultValue='1234567890' data-cursor='1' /><br />
                <input type='text' defaultValue='1234567890' data-cursor='2' /><br />
                <input type='text' defaultValue='1234567890' data-cursor='3' /><br />
                <input type='text' defaultValue='1234567890' data-cursor='-1' /><br />

                <button onClick={this.setCursor}>Set cursor to end of text</button>
                <br /><br />
                <textarea defaultValue='afgdgf sdfgsdfgsd sdfgdsfgsdfg sdfgsdfg jhgjg'></textarea>
                <button onClick={this.setCursor}>Set cursor to end of text</button>
            </div>
        );
    }
});

React.render(<Index />, document.getElementById('body'));

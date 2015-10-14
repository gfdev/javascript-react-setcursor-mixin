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

                <input type='text' defaultValue='1234567890' data-cursor='1' id='input1' />
                <button onClick={this.setCursor.bind(null, '#input1')}>Set cursor to end of text</button>
                <br /><br />

                <input type='text' defaultValue='1234567890' data-cursor='-1' data-cursor-position='-1' /><br />

                <button onClick={this.setCursor.bind(null, this.refs['input1'])}>Set cursor to end of text</button>
                <br /><br />
                <textarea defaultValue='afgdgf sdfgsdfgsd sdfgdsfgsdfg sdfgsdfg jhgjg' />
                <button onClick={this.setCursor}>Set cursor to end of text</button>
            </div>
        );
    }
});

React.render(<Index />, document.getElementById('body'));

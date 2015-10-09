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
                <input type='text' defaultValue='123' data-cursor='end' />
                <button onClick={this.setCursor}>Set cursor to end of text</button>
                <br /><br /><br /><br /><br /><br /><br />
                <textarea>afgdgf sdfgsdfgsd sdfgdsfgsdfg sdfgsdfg jhgjg</textarea>
                <button onClick={this.setCursor}>Set cursor to end of text</button>
            </div>
        );
    }
});

React.render(<Index />, document.getElementById('body'));

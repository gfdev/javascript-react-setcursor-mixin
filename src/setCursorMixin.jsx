'use strict';

var React = require('react');

function setCursor(node, position) {

    if (s && ref && this.refs[ref]) {
        var node = this.refs[ref].refs.input.refs.input.getDOMNode(),
            l = node.value.length;

        if (node.createTextRange) {
            var tr = node.createTextRange();
            tr.collapse(true);
            tr.moveEnd(l);
            tr.moveStart(l);
            tr.select();
        } else if (node.setSelectionRange) {
            node.setSelectionRange(l, l);
        }

        node.focus();
    }
}

var setCursorMixin = {
    componentDidMount: function() {
        var node = React.findDOMNode(this);

        if (!node) return false;

        var focus = node.querySelector('[data-focus]');

        if (focus) {
            focus.focus();
        } else {
            focus = node.querySelector('[data-focus]');
        }
    },
    setCursor: function(node, e) { console.warn('setCursor');
        console.log(e);
        console.log(e.target);
        console.log(node);
    }
};

module.exports = setCursorMixin;

'use strict';

var React = require('react')
    , allowTags = ['INPUT', 'TEXTAREA']
    , allowInputTypes = ['text', 'password', 'search', 'email', 'tel', 'url']
    , attr = 'data-focus'
;

function _setCursor(node, position) {
    var length = node.value.length;

    if (!isNaN(position) && position !== 0 && length) {
        position = position === -1
            ? length
            : position > length
                ? length
            : position;

        if (node.createTextRange) {
            var tr = node.createTextRange();
            tr.collapse(true);
            tr.moveEnd(position);
            tr.moveStart(position);
            tr.select();
        } else if (node.setSelectionRange) {
            node.setSelectionRange(position, position);
        }
    }

    node.focus();
}

var setCursorMixin = {
    componentDidMount: function() {
        var node = React.findDOMNode(this);

        if (!node) return;

        var focusNode = node.querySelector('[' + attr + ']');

        if (focusNode) _setCursor(focusNode, +focusNode.getAttribute(attr));
    },
    setCursor: function(id, position) {
        if (typeof id !== 'string') return;

        var node = React.findDOMNode(this.refs[id])
            || document.getElementById(id);

        if (!node) return;
        if (allowTags.indexOf(node.tagName) === -1) return;
        if (node.tagName === 'INPUT' && allowInputTypes.indexOf(node.type) === -1) return;

        _setCursor(node, +position);
    }
};

module.exports = setCursorMixin;

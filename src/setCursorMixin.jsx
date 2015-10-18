'use strict';

var React = require('react')
    , allowTags = ['INPUT', 'TEXTAREA']
    , allowInputTypes = ['text', 'password', 'search', 'email', 'tel', 'url']
;

function _setCursor(node, position) {
    var l = node.value.length;

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

var setCursorMixin = {
    componentDidMount: function() {
        var node = React.findDOMNode(this);

        if (!node) return false;

        var focus = node.querySelector('[data-focus]');

        if (focus) {
            focus.focus();
        } else {
            focus = node.querySelector('[data-cursor]');
        }
    },
    setCursor: function(id, position, e) { console.warn('setCursor');
        if (typeof id !== 'string') return;
        if (typeof position !== 'number') return;

        var node = React.findDOMNode(this.refs[id])
            || document.getElementById(id);

        if (!node) return;
        if (allowTags.indexOf(node.tagName) === -1) return;
        if (node.tagName === 'INPUT' && allowInputTypes.indexOf(node.type) === -1) return;

        console.warn('id: ' + id);
        console.warn('pos: ' + position);
        console.warn('tag: ' + node.tagName);

        _setCursor(node, position);
    }
};

module.exports = setCursorMixin;

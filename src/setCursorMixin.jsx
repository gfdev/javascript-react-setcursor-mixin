'use strict';

var setCursorMixin = {
    componentDidMount: function() {
        var node = this.getDOMNode();

        if (!node) return false;

        var focus = Array.prototype.slice.call(node.querySelectorAll('[data-focus]'));

        if (focus.length > 0) focus.pop().focus();

    },
    setCursor: (node, position) => {
        console.log(arguments);

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
};

module.exports = setCursorMixin;

/**
 * Copyright (c) 2018 Leon Sorokin, John Long, Fred Daoud, Graham Dixon
 * All rights reserved. (MIT Licensed)
 *
 * domvm-jsx(.jsx) - el.jsx
 * this package supplies the el function defined in the using JSX with domvm wiki (https://github.com/domvm/domvm/wiki/JSX)
 * @preserve https://github.com/gdixon/domvm-jsx
 */

// include domvm
const domvm = require('domvm/dist/full/domvm.full');

// jsx entry function
let el = (...args) => {

    // read the compiled jsx defintion into a defineView call when type is function
    const type = typeof args[0];

    // when the given is a func call
    if (type === 'function') {
        // hydrate the view data and children from the ...args
        const view = args[0];
        const data = args[1] || {};
        // all children except the view and data
        data.children = args.filter(function(arg, key) {

            // not the view or the data definition
            return (key > 1);
        });

        // define the component view
        return domvm.defineView(view, data, data.key);
    }

    // define compiled jsx as spread
    return domvm.defineElementSpread(...args);
}

// returns the el
module.exports = el;

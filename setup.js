const hooks = require('require-extension-hooks');

// Set up a virtual browser environment.  This uses jsdom but jsdom-global could be used instead
require('jsdom-global')();

// Setup `.vue` files to be processed by `require-extension-hooks-vue`.
hooks('vue').plugin('vue').push();
// Setup `.vue` and `.js` files to be processed by `require-extension-hooks-babel`.
hooks(['vue', 'js']).plugin('babel').push()

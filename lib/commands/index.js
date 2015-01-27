var radic = require('radic'),
    util = radic.util,
    requireDirectory = util.requireDirectory;

module.exports = function (cli) {
    requireDirectory(module, {
        visit: function (obj) {
            obj(cli);
        }
    });
};

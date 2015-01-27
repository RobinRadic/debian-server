var path = require( 'path' ),
    async = require( 'async' ),
    EventEmitter2 = require( 'eventemitter2' ).EventEmitter2,
    fs = require( 'fs-extra' ),
    _ = require( 'lodash' ),
    pm2 = require( 'pm2' ),
    tmp = require( 'tmp' ),
    radic = require( 'radic' ),
    util = radic.util,
    sh = radic.sh,
    bin = radic.binwraps;


var lib = module.exports = {
    pkg: fs.readJsonFileSync( path.resolve(__dirname, '../package.json') ),
    config: require('./config'),
    build: require('./build')
};

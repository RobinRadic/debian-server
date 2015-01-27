var path = require( 'path' ),
    async = require( 'async' ),
    EventEmitter2 = require( 'eventemitter2' ).EventEmitter2,
    fs = require( 'fs-extra' ),
    _ = require( 'lodash' ),
    pm2 = require( 'pm2' ),
    temp = require( 'temp' ),
    radic = require( 'radic' ),
    util = radic.util,
    sh = radic.sh,
    bin = radic.binwraps,
    config = require( './config' );


var lib = module.exports = {
    pkg: fs.readJsonFileSync( '../package.json' ),
    config: function () {
        var config = new radic.Config( 'debian-server' );
        return config;
    }.call()
};

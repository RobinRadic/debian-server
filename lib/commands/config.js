var ds     = require( '../' ),
    config = ds.config,
    radic  = require( 'radic' ),
    util   = radic.util,
    bin    = radic.binwraps,
    sh     = radic.sh,
    _      = require( 'lodash' ),
    build = ds.build;
/**
 * @param {cli} cli
 */
module.exports = function ( cli ) {

    cli.generateCommand( 'config', config );

    cli.command('init-config')
        .description('Initializes a new config')
        .usage({
            'init-config': 'Initializes a new default config'
        })
        .method(function(cmd){

        })
};


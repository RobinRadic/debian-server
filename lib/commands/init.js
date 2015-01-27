var ds     = require( '../' ),
    config = ds.config,
    radic  = require( 'radic' ),
    util   = radic.util,
    bin    = radic.binwraps,
    sh     = radic.sh,
    _      = require( 'lodash' ),
    build = require('../build');
/**
 * @param {cli} cli
 */
module.exports = function ( cli ) {

    cli.command('init')
        .description('Initializes a new config')
        .usage({
            'init-config': 'Initializes a new default config'
        })
        .method(function(cmd){

        });
    cli.command('clean')
        .description('Initializes a new config')
        .usage({
            'init-config': 'Initializes a new default config'
        })
        .method(function(cmd){
            cli.log.info('Cleaning up');
            build.clean();
            cli.log.ok('Cleaned');
        });
};


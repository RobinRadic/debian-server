var path          = require( 'path' ),
    async         = require( 'async' ),
    EventEmitter2 = require( 'eventemitter2' ).EventEmitter2,
    fs            = require( 'fs-extra' ),
    _             = require( 'lodash' ),
    pm2           = require( 'pm2' ),
    tmp           = require( 'tmp' ),
    rimraf        = require( 'rimraf' ),
    radic         = require( 'radic' ),
    util          = radic.util,
    sh            = radic.sh,
    bin           = radic.binwraps,
    /**
     * @type {radic.Config}
     */
    config        = require( './config' );

var vmwareDisk = bin.create( 'vmware-vdiskmanager' );

function Build() {
    EventEmitter2.call( this, {
        delimiter: '::',
        wildcards: true
    } );
}
util.inherits( Build, EventEmitter2 );

Build.prototype = {
    vmwareDisk : function ( size, name ) {
        return vmwareDisk( {  //vmware-vdiskmanager -c -s 850MB -a ide -t 0 myIdeDisk.vmdk
            c: true,
            s: size,
            a: 'ide',
            t: 0
        }, name );
    },
    init       : function () {
        var defaults = {
            isoUrl: 'http://gemmei.acc.umu.se/debian-cd/7.8.0/amd64/iso-cd/debian-7.8.0-amd64-netinst.iso',
            path  : {
                build: path.resolve( __dirname, '..', 'build' )
            }
        };
        config.config = defaults;
        config.save();
    },
    isInit     : function () {
        return fs.existsSync( config.get( 'path.build' ) );
    },
    clean      : function () {
        fs.deleteSync( config.get( 'path.build' ) )
    },
    isoDownload: function () {
        radic.net.download( config.get( 'path.build' ) )

    }
};

var build = new Build();
build.Build = Build;
module.exports = build;

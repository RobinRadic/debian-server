
module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        radic_jsdoc: {
            docs: {
                options: {
                    docsPath: 'docs'
                }
            }
        },
        radic_coverage: {
            docs: {
                options: {
                    exclude: ['lib/cli/_celeri/**'],
                    frontMatterPath: 'docs/processed-front-matter.yml'
                }
            }
        },
        radic_jsdoc_mdpages: {
            docs: {
                files: [{
                            src: 'README.md',
                            dest: 'docs/index.md'
                        }]
            }
        },
        git: {
            docs: {
                options: {
                    cwd: 'docs',
                    ignoreErrors: true
                },
                commands: [
                    ['add', { A: true }],
                    ['commit', { m: 'Auto commit & push' }],
                    ['push', { u: 'origin' }, 'gh-pages']
                ]
            }
        }

    });

    grunt.registerTask('default', []);
};

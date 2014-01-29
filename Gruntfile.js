'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    try {
        yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
    } catch (e) {
    }

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: [
                    '<%= yeoman.app %>/styles/{,*/}*.{scss,sass}',
                    '<%= yeoman.app %>/bower_components/gs-ui-infra/app/styles/{,*/}*.{scss,sass}'
                ],
                tasks: ['compass']
            },
            livereload: {
                files: [
                    '{.tmp,<%= yeoman.app %>}/bower_components/gs-ui-infra/app/scripts/{,*/}*.js',
                    '{.tmp,<%= yeoman.app %>}/bower_components/gs-ui-infra/app/styles/{,*/}*.css',
                    '<%= yeoman.app %>/{,*/}*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload']
            }
        },
        connect: {
            options: {
                port: 9099,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= yeoman.dist %>/*',
                            '!<%= yeoman.dist %>/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                autoWatch: false,
                browsers: ['Chrome']
            },
            watch: {
                configFile: 'karma.conf.js',
                singleRun: false
            }
        },
        coffee: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/scripts',
                        src: '{,*/}*.coffee',
                        dest: '.tmp/scripts',
                        ext: '.js'
                    }
                ]
            },
            test: {
                files: [
                    {
                        expand: true,
                        cwd: 'test/spec',
                        src: '{,*/}*.coffee',
                        dest: '.tmp/spec',
                        ext: '.js'
                    }
                ]
            }
        },
        compass: {
            ks: {
                options: {
                    sassDir: ['<%= yeoman.app %>/styles'],
                    cssDir: '.tmp/styles',
                    imagesDir: '<%= yeoman.app %>/images',
                    javascriptsDir: '<%= yeoman.app %>/scripts',
                    fontsDir: '<%= yeoman.app %>/styles/fonts',
                    importPath: '<%= yeoman.app %>/bower_components',
                    relativeAssets: true
                },
                dist: {}

            },
            infra: {
                options: {
                    sassDir: ['<%= yeoman.app %>/bower_components/gs-ui-infra/app/styles'],
                    cssDir: '.tmp/bower_components/gs-ui-infra/app/styles',
                    imagesDir: '<%= yeoman.app %>/images',
                    javascriptsDir: '<%= yeoman.app %>/scripts',
                    fontsDir: '<%= yeoman.app %>/styles/fonts',
                    importPath: '<%= yeoman.app %>/bower_components',
                    relativeAssets: true
                },
                dist: {}
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
//        concat: {
//            dist: {
//                files: {
//                    '<%= yeoman.dist %>/scripts/scripts.js': [
//                        '.tmp/scripts/{,*/}*.js',
//                        '<%= yeoman.app %>/scripts/{,*/}*.js'
//                    ]
//                }
//            }
//        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {'js': ['concat']},
                        post: {}
                    }
                }


            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/images',
                        src: '{,*/}*.{png,jpg,jpeg}',
                        dest: '<%= yeoman.dist %>/images'
                    }
                ]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            },
            infra: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/bower_components/gs-ui-infra/app/styles/{,*/}*.css',
                        '<%= yeoman.app %>/bower_components/gs-ui-infra/dist/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                     // https://github.com/yeoman/grunt-usemin/issues/44
                     //collapseWhitespace: true,
                     collapseBooleanAttributes: true,
                     removeAttributeQuotes: true,
                     removeRedundantAttributes: true,
                     useShortDoctype: true,
                     removeEmptyAttributes: true,
                     removeOptionalTags: true*/
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        src: ['*.html', 'views/*.html'],
                        dest: '<%= yeoman.dist %>'
                    }
                ]
            }
        },
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },
        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.dist %>/scripts',
                        src: '*.js',
                        dest: '<%= yeoman.dist %>/scripts'
                    }
                ]
            }
        },
//        uglify: {
//            dist: {
//                files: {
//                    '<%= yeoman.dist %>/scripts/scripts.js': [
//                        '<%= yeoman.dist %>/scripts/scripts.js'
//                    ]
//                }
//            }
//        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/styles/fonts/**/*.{eot,svg,ttf,woff}'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.{ico,txt}',
                            '.htaccess',
                            'images/{,*/}*.{gif,webp}',
                            'styles/fonts/**/*.{eot,svg,ttf,woff}'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        dest: '<%= yeoman.dist %>',
                        src: [
                            'package.json'
                        ]
                    }
                ]
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', [
        'clean:server',
        'coffee:dist',
        'compass',
        'compass:server',
        'livereload-start',
        'connect:livereload',
        'open',
        'watch'
    ]);

    grunt.registerTask('test', [
        'clean:server',
        'coffee',
        'compass',
        'connect:test',
        'karma:unit'
    ]);

    grunt.registerTask('karmaWatch', [
        'karma:watch'
    ]);


    grunt.registerTask('build', [
        'clean:dist',
        'jshint',
        'coffee',
        'compass:ks:dist',
        'useminPrepare',
        'concat',
        'imagemin',
        'cssmin',
        'htmlmin',
        'copy',
//    'cdnify', //-- guy - we do not want google CDN resources.
        'ngmin',
//        'uglify', // no need
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', ['build']);
};

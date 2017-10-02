module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        ts: {
            build: {
                src: ["src/\*\*/\*.ts", "!node_modules/\*\*/\*.ts"],
                options: {
                    module: 'commonjs',
                    fast: 'never'
                }
            }
        },

        watch: {
            scripts: {
                files: ["src/\*\*/\*.ts", "!node_modules/\*\*/\*.ts"],
                tasks: ["newer:tslint:all", "ts:build"],
                options: {spawn: false}
            }
        },

        nodemon: {
            dev: {
                script: 'out/www.js'
            },
            options: {
                ignore: ['node_modules/**', 'gruntfile.js']
            }
        },

        tslint: {
            options: {
                configuration: grunt.file.readJSON("src/tslint.json")
            },
            all: {
                src: ["src/\*\*/\*.ts", "!node_modules/\*\*/\*.ts"]
            }
        },

        concurrent: {
            watchers: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-concurrent");

    grunt.registerTask("build", ["ts"]);
    grunt.registerTask("serve", ["concurrent:watchers"]);

};
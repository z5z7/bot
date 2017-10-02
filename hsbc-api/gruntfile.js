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
        }

    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", [
        "ts"
    ])

};
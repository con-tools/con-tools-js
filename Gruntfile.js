#!/usr/bin/env grunt

module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		clean : [ 'build', 'deploy' ],
		'http-server' : {
			'dev' : {
				// the server root directory
				root : process.cwd(),
				port : 8282,
				host : '127.0.0.1',
				cache : 0,
				showDir : true,
				autoIndex : true, // server default file extension
				ext : 'html', // run in parallel with other tasks
				runInBackground : false
			}
		},
		jshint : {
			options : {
				jshintrc : '.jshintrc',
			},
			files : [ "." ]
		}
	});

	// external tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-http-server');
	grunt.loadNpmTasks('grunt-aws-s3');

	// custom tasks
	grunt.loadTasks('tasks');

	// defaults
	grunt.registerTask('default', [ 'build', 'deploy' ]);
	grunt.registerTask('serve', [ 'http-server' ]);
};

var child = require('child_process');

module.exports = function(grunt) {
	grunt.registerTask("build", "Build the client code into a deployable package", function() {
		var done = this.async();
		var cwd = process.cwd();
		var builder = child.fork('./enyo/tools/deploy.js', [ '-T', '-s', '.', '-o', 'deploy' ], {
			cwd: cwd
		});
		builder.on("close", function(code) {
			if (code === 0) {
				done();
			} else {
				done(false);
			}
		});

	});
};

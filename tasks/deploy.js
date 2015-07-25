/**
 * Deploy using S3
 */
module.exports = function(grunt) {
	grunt.initConfig({
		aws : grunt.file.readJSON('.secrets.json'), // Load deploy variables
		aws_s3 : {
			options : {
				accessKeyId : '<%= aws.AWSAccessKeyId %>',
				secretAccessKey : '<%= aws.AWSSecretKey %>',
				region : '<%= aws.AWSRegion %>',
				uploadConcurrency : 5, // 5 simultaneous uploads
				downloadConcurrency : 5 // 5 simultaneous downloads
			},
			production : {
				options : {
					bucket : '<%= aws.bucket%>',
//					debug: true,
				},
				files : [ 
				         { expand : true, cwd : 'deploy/', src : [ '**' ], dest : '/' } 
				         ]
			},
		},
		deploy: [ 'aws_s3' ]
	});
	grunt.registerTask("deploy", [ 'aws_s3' ]);
};

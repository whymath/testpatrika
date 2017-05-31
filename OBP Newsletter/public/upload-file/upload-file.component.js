'use strict';

angular.module('uploadFile').
	component('uploadFile', {
		templateUrl: 'upload-file/upload-file.template.html',
		controller: ['$routeParams', 'FileUploader', 
			function uploadFileController($routeParams, FileUploader) {
				
				var self = this;
				
				self.uploader = new FileUploader({
					
				});
			}
		]
	});


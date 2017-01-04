module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({


    //Config for pug(jade) templates
		pug: {
			compile: {
				options: {
          pretty: true,
					data: {
						debug: false
					}
				},
				files: {
          'dist/html/index.html': 'src/pug/index.pug',
          'dist/html/channel.html': 'src/pug/channel.pug',
          'dist/html/podcast.html': 'src/pug/podcast.pug',
					'dist/html/player.html': 'src/pug/player.pug',
				}
			}
		},

    //Config for babel
    babel: {
        options: {
            sourceMap: false,
            presets: ['babel-preset-es2015']
        },
        dist: {
            files: {
                'dist/js/app.js': 'src/js/app.js'
            }
        }
    },

    //Config for compiling sass
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'dist/css/feedcast.css': 'src/sass/main.sass'
            }
        }
    },

    //Config for watch
    watch: {
      scripts: {
        files: ['src/**/*.*'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    }



	});


  grunt.registerTask('build', ['babel','sass', 'pug']);


};